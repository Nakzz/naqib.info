


export function hostnameResolver(production = false) {
	let hostname = "";
	if (
		process.env.NODE_ENV === "docker_production" ||
		process.env.NODE_ENV === "production" || production=== true
	)
		hostname = "https://naqib.info/";
	else {
		hostname = "http://192.168.1.126:7001/";
    }
    
    return hostname
}

export function cmsLinkResolver(){
	var url =
		process.env.NODE_ENV === "docker_production" ||
		process.env.NODE_ENV === "production"
			? "http://172.17.0.1:8010/admin/api"
			: "http://192.168.1.126:5000/admin/api";
    
            console.log(url);
    console.log("Client env: " + process.env.NODE_ENV);
    
    return url;
}
