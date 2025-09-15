import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const w = Math.max(1, Number(searchParams.get("w") || 1200));
  const h = Math.max(1, Number(searchParams.get("h") || 800));
  const q = searchParams.get("q") || "technology,network,computer";

  const key = process.env.UNSPLASH_ACCESS_KEY!;
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${encodeURIComponent(q)}&orientation=landscape&content_filter=high`,
    { headers: { Authorization: `Client-ID ${key}`, "Accept-Version": "v1" }, cache: "no-store" }
  );

  if (!res.ok) {
    return NextResponse.json({ ok: false, url: `https://picsum.photos/${w}/${h}`, source: `fallback-${res.status}` });
  }

  const data = await res.json();

  const raw: string = data.urls.raw;
  const dpr = 2;
  const url =
    `${raw}&w=${Math.floor(w * dpr)}&h=${Math.floor(h * dpr)}` +
    `&fit=crop&crop=edges&q=80&auto=format`;

  // Build proper attribution links with UTM (per Unsplash guidelines)
  const photographerName: string | undefined = data.user?.name;
  const photographerUsername: string | undefined = data.user?.username;
  const photoLink: string | undefined = data.links?.html; // link to the photo page
  const profileLink = photographerUsername
    ? `https://unsplash.com/@${photographerUsername}?utm_source=social-network-demo&utm_medium=referral`
    : undefined;
  const unsplashLink = `https://unsplash.com/?utm_source=social-network-demo&utm_medium=referral`;

  const alt = data.alt_description || data.description || "Unsplash image";

  return NextResponse.json({
    ok: true,
    url,
    alt,
    credit: {
      photographerName,
      profileLink,
      photoLink,
      unsplashLink,
    },
  });
}
