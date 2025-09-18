import { useEffect, useRef, useState } from "react";
import type { ApiResp } from "../../server/unsplash/types";

type Params = {
  width?: number;
  height?: number;
  query?: string;
};

export function useRandomImage({
  width,
  height,
  query = "technology,ai,computer",
}: Params) {
  const [img, setImg] = useState<ApiResp | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!width || !height) return;

    abortRef.current?.abort();
    const abort = new AbortController();
    abortRef.current = abort;

    const params = new URLSearchParams({
      w: String(width),
      h: String(height),
      q: query,
    });

    setLoading(true);
    setError(null);

    fetch(`/api/random-image?${params}`, {
      cache: "no-store",
      signal: abort.signal,
    })
      .then((r) => r.json())
      .then((d: ApiResp) => setImg(d))
      .catch((e) => {
        if (abort.signal.aborted) return;
        setImg({ ok: false });
        setError(e);
      })
      .finally(() => {
        if (!abort.signal.aborted) setLoading(false);
      });

    return () => abort.abort();
  }, [width, height, query]);

  const refetch = () => {
    // trigger by nudging state: rely on deps width/height/query
    setImg((prev) => (prev ? { ...prev } : prev));
  };

  return { img, loading, error, refetch };
}
