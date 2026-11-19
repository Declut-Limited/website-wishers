// Public app settings from the Wishers API (GET /settings), so the site quotes the live fees.
const SETTINGS_URL = "https://api.wishers.com.ng/api/settings";

// Used if the API can't be reached; matches the API's default.
const DEFAULT_REFERRER_SHARE_PERCENTAGE = 1;

export async function getReferrerSharePercentage(): Promise<number> {
  try {
    const res = await fetch(SETTINGS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return DEFAULT_REFERRER_SHARE_PERCENTAGE;
    const body = await res.json();
    const value = body?.data?.referrerSharePercentage;
    return typeof value === "number" ? value : DEFAULT_REFERRER_SHARE_PERCENTAGE;
  } catch {
    return DEFAULT_REFERRER_SHARE_PERCENTAGE;
  }
}
