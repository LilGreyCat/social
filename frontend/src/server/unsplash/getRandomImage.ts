import type { ApiResp } from "@/server/unsplash/types";

type Params = {
  w: number;
  h: number;
  q: string;
  dpr?: number;
};

export async function getRandomImage({
  w,
  h,
  q,
  dpr = 2,
}: Params): Promise<ApiResp> {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) throw new Error("Missing UNSPLASH_ACCESS_KEY");

  const sig = Date.now().toString(36);

  const url =
    "https://api.unsplash.com/photos/random?" +
    `query=${encodeURIComponent(q)}` +
    "&orientation=landscape&content_filter=high" +
    `&sig=${sig}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${key}`,
      "Accept-Version": "v1",
    },
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) throw new Error(`Unsplash ${res.status}`);

  const data = await res.json();
  const raw: string | undefined = data?.urls?.raw;
  if (!raw) throw new Error("Missing image url");

  const finalUrl =
    `${raw}&w=${Math.floor(w * dpr)}&h=${Math.floor(h * dpr)}` +
    `&fit=crop&crop=edges&q=80&auto=format`;

  const photographerName: string | undefined = data?.user?.name;
  const photographerUsername: string | undefined = data?.user?.username;
  const photoLink: string | undefined = data?.links?.html;

  const profileLink = photographerUsername
    ? `https://unsplash.com/@${photographerUsername}` +
      `?utm_source=social-network-demo&utm_medium=referral`
    : undefined;

  const unsplashLink =
    "https://unsplash.com/?utm_source=social-network-demo" +
    "&utm_medium=referral";

  const alt =
    data?.alt_description || data?.description || "Unsplash image";

  return {
    ok: true,
    url: finalUrl,
    alt,
    credit: {
      photographerName,
      profileLink,
      photoLink,
      unsplashLink,
    },
  };
}
