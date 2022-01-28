const express = require("express");
const { keystone, apps } = require("./index.js");
var fs = require("fs");
var http = require("http");
var https = require("https");
const path = require("path");

const dev =
	process.env.NODE_ENV !== "production" ||
	process.env.NODE_ENV !== "docker_production" ||
	process.env.NODE_ENV === "development";

var privateKey = fs.readFileSync("./cert/localhost.key").toString();
var certificate = fs.readFileSync("./cert/localhost.crt").toString();

var credentials = {
	key: privateKey,
	cert: certificate,
	ciphers:
		"ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES256-SHA384",
	honorCipherOrder: true,
	secureProtocol: "TLSv1_2_method",
};

keystone
	.prepare({
		apps: apps,
		dev,
	})
	.then(async ({ middlewares }) => {
		await keystone.connect();
		const app = express();

		app.use(middlewares);

		var server;
		const PORT = 5000;

		// if (dev) {
		// 	//http only
		// 	server = http.createServer(app);
		// 	console.log(`Starting HTTP server: ${PORT}`)
		// } else {
			server = https.createServer(credentials, app);
			console.log(`Starting HTTPS server: ${PORT}`)

		// }

		server.listen(PORT);
	});
