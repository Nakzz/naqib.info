const express = require("express");
const { keystone, apps } = require("./index.js");
var fs = require("fs");
var https = require("https");

var privateKey = fs.readFileSync("../cert/privkey.pem", "utf8");
var certificate = fs.readFileSync("../cert/fullchain.pem", "utf8");
var credentials = { key: privateKey, cert: certificate };

keystone
	.prepare({
		apps: apps,
		dev:
			process.env.NODE_ENV !== "production" ||
			process.env.NODE_ENV !== "docker_production",
	})
	.then(async ({ middlewares }) => {
		await keystone.connect();
		const app = express();
		app.use(middlewares);

		var httpsServer = https.createServer(credentials, app);

		httpsServer.listen(3000);
		// app.use(middlewares).listen(3000);
	});
