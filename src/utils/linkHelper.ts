export const addReferrer = (url: string, referrer: string = "omnicraft"): string => {
	try {
		const urlObj = new URL(url);
		urlObj.searchParams.set("ref", referrer);
		return urlObj.toString();
	} catch {
		// If URL is invalid, return original URL
		console.warn("Invalid URL provided:", url);
		return url;
	}
};
