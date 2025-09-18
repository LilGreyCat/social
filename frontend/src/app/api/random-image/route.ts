import { jsonNoStore } from "@/web/http";
import { getRandomImage } from "@/server/unsplash/getRandomImage";
import { parseParams } from "./utils";
import type { ApiResp } from "@/server/unsplash/types";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const { w, h, q } = parseParams(req.url);

  try {
    const payload = await getRandomImage({ w, h, q });
    return jsonNoStore<ApiResp>(payload, 200);
  } catch (e: any) {
    const message = String(e?.message ?? "unknown error");
    const fallback: ApiResp = {
      ok: false,
      url: `https://picsum.photos/${w}/${h}`,
      source: "fallback-error",
      error: message,
    };
    return jsonNoStore<ApiResp>(fallback, 200);
  }
}
