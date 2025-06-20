export const addReferrer = (url, referrer = "omnicraft") => {
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set("ref", referrer);
    return urlObj.toString();
  } catch (error) {
    // If URL is invalid, return original URL
    console.warn("Invalid URL provided:", url);
    return url;
  }
};
