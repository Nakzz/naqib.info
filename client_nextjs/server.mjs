import express from "express";
import next from "next";
import path from "path";
import bodyParser from "body-parser";
// import stripe from "stripe"(keys.stripeSecretKey);
import fs from "fs";
import http from "http";
import https from "https";
import compression from "compression";
import helmet from "helmet";

let __dirname = path.resolve();

// import keys from "./server/config/keys";
// var privateKey = fs.readFileSync(
// 	"/data/naqib.info_static_content/cert/privkey.pem",
// 	"utf8"
// );
// var certificate = fs.readFileSync(
// 	"/data/naqib.info_static_content/cert/fullchain.pem",
// 	"utf8"
// );
// var credentials = { key: privateKey, cert: certificate };

const dev = process.env.NODE_ENV !== "production";

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const allowedPath = ["/", "/about-me"]; // TODO: add allowed path until website is complete

app.prepare().then(() => {
	const server = express();

	// Static files
	server.use(
		"/public",
		express.static("/data/naqib.info_static_content/public", {
			maxAge: dev ? "0" : "365d",
		})
	);

	// https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
	server.use(
		"/images",
		express.static(path.join(__dirname, "images"), {
			maxAge: dev ? "0" : "365d",
		})
	);

	server.use(
		"/_next",
		express.static(path.join(__dirname, ".next"), {
			maxAge: dev ? "0" : "365d",
		})
	);

	server.use(bodyParser.json());
	server.use(compression()); //Compress all routes
	//server.use(helmet()); //protect against well known vulnerabilities
	
	server.get("/cyber", (req, res) => {
		if (!req.secure)
			// HTTP=> HTTPS
			res.redirect("https://" + req.headers.host + req.url);
		
			return handle(req, res);
		// return app.render(req, res, '/coming-soon') //FOR COMING SOON PAGE REDIRECT
	});

	server.get("*", (req, res) => {
		if (allowedPath.indexOf(req.originalUrl) >=0){
			return handle(req, res);

		}
		console.log(req.originalUrl)
		// if (!req.secure)
		// 	// HTTP=> HTTPS
		// 	res.redirect("https://" + req.headers.host + req.url);
		
		return app.render(req, res, '/coming-soon') //FOR COMING SOON PAGE REDIRECT
	});

	//NOT USING STRIPE
	// server.post('/api/stripe/checkout', async (req, res) => {
	//     await stripe.charges.create({
	//         amount: req.body.amount,
	//         currency: 'usd',
	//         description: 'Naqib.info application React Next eCommerce + Landing Page Templates',
	//         source: req.body.token.id
	//     });
	//     res.send({})
	// });

	const PORT = Number(process.env.PORT) || 7000;

	var httpServer = http.createServer(server);
	// var httpsServer = https.createServer(credentials, server);

	httpServer.listen(PORT, () => {
		// if (err) throw err;
		console.log(`> Read on http://localhost:${PORT}`);
	});

	// httpsServer.listen(PORT + 1, () => {
	// 	// if (err) throw err;
	// 	console.log(`> Read on http://localhost:${PORT + 1}`);
	// });
});