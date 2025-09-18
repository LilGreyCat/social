import type { ApiResp } from "@/server/unsplash/types";

type Params = {
  w: number;
  h: number;
  q: string;
  dpr?: number;
};

type UnsplashResponse = {
  urls?: { raw?: string };
  user?: { name?: string; username?: string };
  links?: { html?: string };
  alt_description?: string | null;
  description?: string | null;
};

const RANDOM_ENDPOINT = "https://api.unsplash.com/photos/random";
const REFERRAL_PARAMS = "utm_source=social-network-demo&utm_medium=referral";

/**
 * Returns a random image from Unsplash with the given dimensions and query.
 * The `dpr` parameter is used to set the device pixel ratio for the image.
 * If not provided, it defaults to 2.
 *
 * @param {Params} params - An object containing the width, height, query, and device pixel ratio.
 * @returns {Promise<ApiResp>} - A promise that resolves to an object containing the image URL, alt text, and credit information.
 */
export async function getRandomImage({
  w,
  h,
  q,
  dpr = 2,
}: Params): Promise<ApiResp> {
  const key = getAccessKey();
  const requestUrl = buildRandomUrl(q);
  const response = await requestRandomImage(requestUrl, key);
  const rawUrl = getRawUrl(response);

  return {
    ok: true,
    url: buildImageUrl(rawUrl, w, h, dpr),
    alt: getAltText(response),
    credit: buildCredit(response),
  };
}

/**
 * Returns the Unsplash access key from the environment variable
 * UNSPLASH_ACCESS_KEY. If the key is not set, it throws an error.
 * @returns {string} - The Unsplash access key.
 * @throws {Error} - If the UNSPLASH_ACCESS_KEY environment variable is not set.
 */
function getAccessKey(): string {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) throw new Error("Missing UNSPLASH_ACCESS_KEY");
  return key;
}

/**
 * Builds a URL for a random image from Unsplash with the given query.
 * The URL is built by setting the query, orientation, content filter, and signature query parameters.
 * The signature is set to the current timestamp in base 36.
 * @param {string} query - The query to search for on Unsplash.
 * @returns {string} - The URL for the random image.
 */
function buildRandomUrl(query: string): string {
  const url = new URL(RANDOM_ENDPOINT);
  url.searchParams.set("query", query);
  url.searchParams.set("orientation", "landscape");
  url.searchParams.set("content_filter", "high");
  url.searchParams.set("sig", Date.now().toString(36));
  return url.toString();
}

/**
 * Requests a random image from Unsplash with the given URL and access key.
 * The function returns a promise that resolves to an object containing the image data.
 * If the request fails, it throws an error with the status code.
 * @param {string} url - The URL for the random image.
 * @param {string} key - The Unsplash access key.
 * @returns {Promise<UnsplashResponse>} - A promise that resolves to an object containing the image data.
 * @throws {Error} - If the request fails.
 */
async function requestRandomImage(
  url: string,
  key: string,
): Promise<UnsplashResponse> {
  const res = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${key}`,
      "Accept-Version": "v1",
    },
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) throw new Error(`Unsplash ${res.status}`);
  return (await res.json()) as UnsplashResponse;
}

/**
 * Returns the raw URL of the image from the Unsplash response.
 * If the raw URL is not present in the response, it throws an error.
 * @param {UnsplashResponse} data - The Unsplash response.
 * @returns {string} - The raw URL of the image.
 * @throws {Error} - If the raw URL is not present in the response.
 */
function getRawUrl(data: UnsplashResponse): string {
  const raw = data.urls?.raw;
  if (!raw) throw new Error("Missing image url");
  return raw;
}

/**
 * Builds a URL for an image from Unsplash with the given dimensions and device pixel ratio.
 * The URL is built by setting the width, height, fit, crop, quality, and auto query parameters.
 * The width and height are multiplied by the device pixel ratio and then floored to the nearest integer.
 * The fit and crop are set to "crop" and "edges", respectively.
 * The quality is set to 80.
 * The auto parameter is set to "format".
 * @param {string} raw - The raw URL of the image.
 * @param {number} w - The width of the image.
 * @param {number} h - The height of the image.
 * @param {number} dpr - The device pixel ratio.
 * @returns {string} - The URL for the image.
 */
function buildImageUrl(
  raw: string,
  w: number,
  h: number,
  dpr: number,
): string {
  const url = new URL(raw);
  url.searchParams.set("w", Math.floor(w * dpr).toString());
  url.searchParams.set("h", Math.floor(h * dpr).toString());
  url.searchParams.set("fit", "crop");
  url.searchParams.set("crop", "edges");
  url.searchParams.set("q", "80");
  url.searchParams.set("auto", "format");
  return url.toString();
}

/**
 * Returns the alt text for an image from Unsplash.
 * The alt text is taken from the `alt_description` property of the response,
 * or the `description` property if the `alt_description` property is not present.
 * If both properties are not present, the function returns the string "Unsplash image".
 * @param {UnsplashResponse} data - The Unsplash response.
 * @returns {string} - The alt text for the image.
 */
function getAltText(data: UnsplashResponse): string {
  return data.alt_description || data.description || "Unsplash image";
}

/**
 * Builds the credit information for an image from Unsplash.
 * The credit information includes the author's name, profile link, photo link, and Unsplash link.
 * If the author's username is not present in the response, the profile link is not included.
 * @param {UnsplashResponse} data - The Unsplash response.
 * @returns {ApiResp["credit"]} - The credit information for the image.
 */
function buildCredit(data: UnsplashResponse): ApiResp["credit"] {
  const username = data.user?.username;
  const profileLink = username
    ? `https://unsplash.com/@${username}?${REFERRAL_PARAMS}`
    : undefined;

  return {
    photographerName: data.user?.name,
    profileLink,
    photoLink: data.links?.html,
    unsplashLink: `https://unsplash.com/?${REFERRAL_PARAMS}`,
  };
}
