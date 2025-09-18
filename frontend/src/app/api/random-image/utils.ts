/**
 * Parse an input URL and extract width, height, and query parameters.
 * Width and height are clamped to be at least 1, and the query parameter
 * defaults to "technology,computer,ai" if not provided.
 * @param {string} inputUrl - The URL to parse.
 * @returns {Object} An object containing width, height, and query parameters.
 */
export function parseParams(inputUrl: string) {
  const sp = new URL(inputUrl).searchParams;
  const w = clampMin(intOr(sp.get("w"), 1200), 1);
  const h = clampMin(intOr(sp.get("h"), 800), 1);
  const q = sp.get("q") ?? "technology,computer,ai";
  return { w, h, q };
}

function intOr(v: string | null, dflt: number) {
  const n = Number(v);
  return Number.isFinite(n) ? n : dflt;
}

function clampMin(n: number, min: number) {
  return n < min ? min : n;
}
