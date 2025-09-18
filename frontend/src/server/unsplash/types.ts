export type Credit = {
  photographerName?: string;
  profileLink?: string;
  photoLink?: string;
  unsplashLink?: string;
};

export type ApiResp = {
  ok: boolean;
  url?: string;
  alt?: string;
  credit?: Credit;
  source?: string;
  error?: string;
};
