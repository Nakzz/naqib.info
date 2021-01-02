const express = require("express");
const { keystone, apps } = require("./index.js");
var fs = require("fs");
var https = require("https");
const path = require("path");

var privateKey = fs.readFileSync("/data/naqib.info_static_content/cert/privkey.pem", "utf8");
var certificate = fs.readFileSync("/data/naqib.info_static_content/cert/fullchain.pem", "utf8");
var credentials = { key: privateKey, cert: certificate };

const dev =
	process.env.NODE_ENV !== "production" ||
	process.env.NODE_ENV !== "docker_production";

keystone
	.prepare({
		apps: apps,
		dev,
	})
	.then(async ({ middlewares }) => {
		await keystone.connect();
		const app = express();

		// app.use(
		// 	express.static(path.join(__dirname, "public"), {
		// 		maxAge: dev ? "0" : "365d",
		// 	})
		// );



		app.use(middlewares);

		var httpsServer = https.createServer(credentials, app);

		httpsServer.listen(3000);
		// app.use(middlewares).listen(3000);
	});
