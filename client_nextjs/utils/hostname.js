export function hostnameResolver(production = false) {
	let hostname = "";
	if (
		process.env.NODE_ENV === "docker_production" ||
		process.env.NODE_ENV === "production" ||
		production === true
	)
		hostname = "https://naqib.info/";
	else {
		hostname = "http://192.168.1.126:7001/";
	}

	return hostname;
}

export function cmsLinkResolver() {
	var url =
		process.env.CMS_URL === undefined
			? "https://192.168.1.126:5000/admin/api"
			: process.env.CMS_URL;

	console.log(process.env.CMS_URL);
	console.log("CMS url: " + url);

	return url;
}
