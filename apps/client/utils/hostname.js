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
