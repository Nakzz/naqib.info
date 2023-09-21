.git/
docs/
node_modules
npm-debug.log
unused_pages/
package-lock.json--------------------------------------------------
<?xml version="1.0" encoding="UTF-8"?>
      <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      </urlset>--------------------------------------------------
Sitemap: [https://naqib.info/sitemap.xml]

User-agent: *
Allow: /*

Disallow: /api/*--------------------------------------------------
{
  "name": "naqib_personal_website",
  "version": "1.5.0",
  "description": "Built from scrach",
  "main": "index.js",
  "scripts": {
    "dev": "node server.mjs -p $PORT",
    "build": "NODE_ENV=development next build ",
    "start": "NODE_ENV=$NODE_ENV node server.mjs -p $PORT",
    "requirements-check": "node --experimental-json-modules check_node_version.js ",
    "predev": "npm run requirements-check"
  },
  "engines": {
    "node": ">=14.15.3"
  },
  "engineStrict": true,
  "author": "Ajmain Naqib",
  "license": "ISC",
  "dependencies": {
    "@apollo/client": "^3.3.12",
    "@babel/runtime-corejs2": "^7.9.2",
    "@zeit/next-css": "^1.0.1",
    "@zeit/next-sass": "^1.0.1",
    "axios": "^0.21.1",
    "body-parser": "^1.19.0",
    "compression": "^1.7.4",
    "express": "^4.17.1",
    "graphql": "^15.5.0",
    "helmet": "^4.4.1",
    "imagemin-mozjpeg": "^9.0.0",
    "imagemin-optipng": "^8.0.0",
    "imagemin-svgo": "^9.0.0",
    "next": "^9.5.1",
    "next-compose-plugins": "^2.2.1",
    "next-fonts": "^0.18.0",
    "next-optimized-images": "^2.6.2",
    "next-redux-wrapper": "^3.0.0",
    "next-routes": "^1.4.2",
    "next-seo": "^4.22.0",
    "next-videos": "^1.4.0",
    "parallax-js": "^3.1.0",
    "postcss-flexbugs-fixes": "^5.0.2",
    "postcss-preset-env": "^6.7.0",
    "react": "^16.13.1",
    "react-accessible-accordion": "^3.3.4",
    "react-device-detect": "^1.17.0",
    "react-dom": "^17.0.2",
    "react-image-lightbox": "^5.1.1",
    "react-masonry-component": "^6.2.1",
    "react-minimal-pie-chart": "^8.2.0",
    "react-modal-video": "^1.2.6",
    "react-owl-carousel3": "^2.2.5",
    "react-preloading-screen": "^1.0.2",
    "react-redux": "^7.2.3",
    "react-share": "^4.4.0",
    "react-stripe-checkout": "^2.6.3",
    "react-toastify": "^7.0.3",
    "react-visibility-sensor": "^5.1.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0",
    "sass": "^1.32.8",
    "segfault-handler": "^1.3.0",
    "semver": "^7.3.4",
    "typed.js": "^2.0.11",
    "wowjs": "^1.1.3"
  },
  "devDependencies": {
    "@fullhuman/postcss-purgecss": "^4.0.3",
    "@types/node": "^14.14.19",
    "@types/react": "^17.0.0",
    "nextjs-sitemap-generator": "^1.3.1",
    "postcss": "^8.2.8",
    "redux-devtools-extension": "^2.13.9",
    "typescript": "^4.1.3"
  }
}
--------------------------------------------------
14.15.3--------------------------------------------------
import express from "express";
import next from "next";
import path from "path";
import bodyParser from "body-parser";
// import stripe from "stripe"(keys.stripeSecretKey);
// import fs from "fs";
import http from "http";
// import https from "https";
import compression from "compression";
import helmet from "helmet";
import sitemap from "nextjs-sitemap-generator";

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

if (!dev) {
	sitemap({
		baseUrl: "https://naqib.info",
		pagesDirectory: __dirname + "/.next/server/pages",
		targetDirectory: "public/",
		ignoredExtensions: ["js", "map"],
		ignoredPaths: ["assets"], // Exclude everything that isn't static page
		sitemapFilename: "sitemap.xml",
		nextConfigPath: __dirname + "/next.config.js",
	});
}

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const allowedPath = [
	"/about-me",
	"/blog",
	"/public",
	"/images",
	"/blog-details",
]; // TODO: add allowed path until website is complete

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

	if (!dev) {
		server.use(compression()); //Compress all routes
		server.use(
			helmet({
				contentSecurityPolicy: false,
			})
		); //protect against well known vulnerabilities
	}

	server.get("*", (req, res) => {
		//Only serving allowed path
		// if (req.originalUrl === "/") return handle(req, res);

		// let foundPath = false;
		// allowedPath.forEach((e) => {
		// 	if (req.originalUrl.includes(e) && !foundPath) {
		// 		console.log(`	url allowed for ${e}`);
		// 		foundPath = true;
		// 	}
		// });

		// console.log(`	${req.originalUrl} ${foundPath}`);
		// if (foundPath || dev)return handle(req, res);

		return handle(req, res);

		return app.render(req, res, "/coming-soon"); //FOR COMING SOON PAGE REDIRECT
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
--------------------------------------------------
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "module": "commonjs",
      "outDir": "dist",
      "noEmit": false
    },
    "include": ["server"]
  }--------------------------------------------------
{
  "compilerOptions": {
    // "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "target": "es5",
    "module": "esnext"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx", "check_node_version.js"
  ]
}
--------------------------------------------------
const semver = require ("semver");
const { engines } = require ("./package");
const version = engines.node;
 if (!semver.satisfies(process.version, version)) {
  throw new Error(`The current node version${process.version} does not satisfy the required version ${version} .`);
}--------------------------------------------------
$font-family: "Rubik", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;
$template-color: #38d16a;
$pink-color: #f54ea2;
$blue-color: #151448;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;
$transition: 0.5s;
$font-size: 15px;

/*================================================
Signup CSS
=================================================*/
.signup-form {
	background: $white-color;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 40px;
	border-radius: 5px;

	h3 {
		font: {
			size: 22px;
		}
		margin-bottom: 25px;
	}
	form {
		.form-check {
			margin-top: 10px;

			.form-check-label {
				color: $paragraph-color;
			}
		}
		.btn {
			margin: {
				bottom: 20px;
				top: 20px;
			}
		}
		span {
			display: block;
			color: $paragraph-color;

			a {
				color: $template-color;
			}
		}
	}
}

/*================================================
FAQ CSS
=================================================*/
.faq-accordion {
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	background: $white-color;
	border-radius: 10px;

	.accordion {
		border: none;

		.accordion__item {
			display: block;
			margin-bottom: 15px;

			&:last-child {
				margin-bottom: 0;
			}
			.accordion__button {
				display: block;
				padding: 20px 30px;
				text-decoration: none;
				background: #f5f9ff;
				cursor: pointer;
				transition: $transition;
				outline: 0;
				font: {
					size: 20px;
					weight: 500;
				}

				&:hover,
				&.active,
				&:focus {
					background: $template-color;
					color: $white-color;
				}
				&.active {
					border-radius: 0;
				}
			}
			.accordion-content {
				position: relative;
				overflow: hidden;
				padding: 0;
				line-height: 1.9;
			}
		}
		.accordion__item + .accordion__item {
			border: none;
		}
	}
}
.faq-contact {
	margin-top: 45px;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	border-radius: 4px;

	h3 {
		font: {
			size: 25px;
		}
		margin-bottom: 25px;
	}
	form {
		.btn {
			margin-top: 15px;
		}
	}
}

/*================================================
Coming Soon CSS
=================================================*/
.coming-soon {
	position: relative;
	z-index: 1;
	background: {
		image: url(../../images/coming-soon-banner-min.jpg);
		position: center center;
		size: cover;
		attachment: fixed;
		repeat: no-repeat;
	}
	height: 100vh;
	text-align: center;
	overflow: hidden;

	&::before {
		z-index: -1;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: $black-color;
		opacity: 0.9;
		content: "";
		position: absolute;
	}
	.coming-soon-content {
		max-width: 650px;
		margin: 0 auto;

		h1 {
			color: $white-color;
			font: {
				size: 45px;
				weight: 700;
			}
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		h2 {
			color: $white-color;
			font: {
				size: 30px;
				weight: 700;
			}
			white-space: nowrap;
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		p {
			color: #c7c3c7;
			margin: {
				top: 20px;
				bottom: 35px;
			}
			font: {
				size: 15px;
				weight: 500;
			}
		}
		form {
			position: relative;

			.form-control {
				background: transparent;
				border: 1px solid $white-color;
				border-radius: 50px;
				color: $white-color;
				padding-left: 15px;
				height: 55px;

				&:focus {
					border-color: $template-color;
				}
				&::placeholder {
					color: $white-color;
				}
			}
			button {
				position: absolute;
				right: 0;
				height: 100%;
				background: $template-color;
				top: 0;
				color: $white_color;
				border: none;
				width: 130px;
				font-weight: 500;
				cursor: pointer;
				text-transform: uppercase;
				border-radius: 0 50px 50px 0;
				transition: $transition;

				&:hover {
					background: $pink-color;
				}
			}
		}
		#timer {
			margin-bottom: 35px;

			div {
				display: inline-block;
				font: {
					size: 45px;
					weight: 600;
				}
				color: $white-color;
				width: 135px;
				height: 135px;
				border: 1px solid #eeeeee;
				border-radius: 50%;
				padding-top: 34px;
				line-height: 40px;
				margin: 0 5px;
			}
			span {
				display: block;
				font: {
					size: 17px;
					weight: 400;
				}
			}
		}
	}
}

/*================================================
404 Error CSS
=================================================*/
.error {
	background: url(../../images/error.gif) no-repeat center center fixed;
	background-size: cover;
	height: 100vh;
	text-align: center;
	position: relative;
	&::before {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000;
		top: 0;
		left: 0;
		content: "";
		opacity: 0.6;
	}

	h1 {
		font-size: 260px;
		margin: 0;
		color: $white-color;
		position: relative;
	}
	h2 {
		font-size: 30px;
		margin: 0 0 35px;
		color: $white-color;
		position: relative;

		i {
			font-size: 1.5em;
			margin-left: 5px;
			position: relative;
			top: 5px;
		}
	}
}

/*================================================
Footer CSS
=================================================*/
.footer-area {
	position: relative;
	z-index: 1;
	overflow: hidden;
	background: $blue-color; //#08071c;

	.line-bg {
		position: absolute;
		top: -120px;
		right: -100px;
		margin: 0 auto;
		text-align: center;
		left: 0;
		opacity: 0.6;
		z-index: -1;
	}
	.shape18 {
		top: 55%;
		left: 2%;
	}
	.shape21 {
		top: 15%;
		right: 5%;
	}
	.shape7 {
		right: 4%;
		top: 45%;
	}
}
.single-footer-widget {
	.logo {
		a {
			display: block;
		}
		margin-bottom: 17px;
	}
	p {
		margin-bottom: 20px;
		color: $white-color;
	}
	h3 {
		font-size: 22px;
		color: $white-color;
		margin-bottom: 30px;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;

		&.social-links {
			li {
				display: inline-block;
				a {
					width: 35px;
					height: 35px;
					line-height: 35px;
					font-size: 15px;
					background: $white-color;
					color: $black-color;
					text-align: center;
					border-radius: 50%;
					margin-right: 6px;
					&:hover {
						background: $template-color;
						color: $white-color;
					}
				}
			}
		}
		&.list {
			li {
				margin-bottom: 12px;
				position: relative;
				padding-left: 15px;

				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: $template-color;
					margin-top: -4px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-recent-post {
			li {
				margin-bottom: 14px;

				a {
					color: $white-color;
					font-weight: 500;

					&:hover {
						color: $template-color;
					}
				}
				span {
					display: block;
					color: $template-color;
					margin-top: 8px;
					font-size: 13px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-contact-info {
			li {
				color: $white-color;
				margin-bottom: 12px;
				position: relative;
				padding-left: 25px;
				span {
					margin-right: 5px;
				}
				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&:last-child {
					margin-bottom: 0;
				}
				i {
					position: absolute;
					color: $template-color;
					left: 0;
					top: 50%;
					margin-top: -8px;
					font-size: 17px;
				}
			}
		}
	}
}
.copyright-area {
	margin-top: 120px;
	border-top: 1px solid #444352;
	padding: {
		top: 30px;
		bottom: 30px;
	}
	p {
		color: $white-color;

		a {
			color: $template-color;

			&:hover {
				color: $pink-color;
			}
		}
	}
}

/*================================================
Go Top CSS
=================================================*/
.go-top {
	position: fixed;
	cursor: pointer;
	bottom: 15px;
	right: 15px;
	font-size: 25px;
	color: $white-color;
	background-color: $template-color;
	z-index: 4;
	// display: none;
	width: 50px;
	text-align: center;
	height: 50px;
	line-height: 50px;
	border-radius: 50%;
	transition: $transition;

	&:hover {
		color: $white-color;
		background: $pink-color;
	}
}
// .modal {
// 	background: #0000004f;
// }
.thank-you-area {
	text-align: center;
	padding: {
		top: 150px;
		bottom: 150px;
	}
	h1 {
		margin-bottom: 15px;
	}
}

/*================================================
Animation CSS
=================================================*/
.item-enter {
	opacity: 0;
}
.item-enter-active {
	opacity: 1;
	transition: opacity 500ms ease-in;
}
.item-exit {
	opacity: 1;
}
.item-exit-active {
	opacity: 0;
	transition: opacity 0ms ease-in;
	display: none;
}


/*================================================
Margin CSS
=================================================*/
/*
This .scss loop will create "margin helpers" and "padding helpers" for use in your web projects.
It will generate several classes such as:
.m-r-10 which gives margin-right 10 pixels.
.m-r-15 gives MARGIN to the RIGHT 15 pixels.
.m-t-15 gives MARGIN to the TOP 15 pixels and so on.
.p-b-5 gives PADDING to the BOTTOM of 5 pixels
.p-l-40 gives PADDING to the LEFT of 40 pixels
The first letter is "m" or "p" for MARGIN or PADDING
Second letter is "t", "b", "l", or "r" for TOP, BOTTOM, LEFT, or RIGHT
Third letter is the number of spacing in pixels. Adjust the amounts generated by editing the $spaceamounts variable below.
*/

$spaceamounts: (
	5,
	10,
	15,
	20,
	25,
	30,
	35,
	40,
	45,
	50,
	75,
	100,
	200
); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
	@each $side in $sides {
		.m-#{str-slice($side, 0, 1)}-#{$space} {
			margin-#{$side}: #{$space}px !important;
		}

		.p-#{str-slice($side, 0, 1)}-#{$space} {
			padding-#{$side}: #{$space}px !important;
		}
	}
}

div[disabled] {
	pointer-events: none;
	opacity: 0.2;
}

ul[disabled] {
	pointer-events: none;
	opacity: 0.2;
}
.disable {
	pointer-events: none;
	opacity: 0.2;
}

// Navbar
.nav-item{
	a{
		white-space: nowrap;	
	}
}--------------------------------------------------
.git/
docs/
node_modules
npm-debug.log
unused_pages/
package-lock.json--------------------------------------------------
<?xml version="1.0" encoding="UTF-8"?>
      <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      </urlset>--------------------------------------------------
Sitemap: [https://naqib.info/sitemap.xml]

User-agent: *
Allow: /*

Disallow: /api/*--------------------------------------------------
{
  "name": "naqib_personal_website",
  "version": "1.5.0",
  "description": "Built from scrach",
  "main": "index.js",
  "scripts": {
    "dev": "node server.mjs -p $PORT",
    "build": "NODE_ENV=development next build ",
    "start": "NODE_ENV=$NODE_ENV node server.mjs -p $PORT",
    "requirements-check": "node --experimental-json-modules check_node_version.js ",
    "predev": "npm run requirements-check"
  },
  "engines": {
    "node": ">=14.15.3"
  },
  "engineStrict": true,
  "author": "Ajmain Naqib",
  "license": "ISC",
  "dependencies": {
    "@apollo/client": "^3.3.12",
    "@babel/runtime-corejs2": "^7.9.2",
    "@zeit/next-css": "^1.0.1",
    "@zeit/next-sass": "^1.0.1",
    "axios": "^0.21.1",
    "body-parser": "^1.19.0",
    "compression": "^1.7.4",
    "express": "^4.17.1",
    "graphql": "^15.5.0",
    "helmet": "^4.4.1",
    "imagemin-mozjpeg": "^9.0.0",
    "imagemin-optipng": "^8.0.0",
    "imagemin-svgo": "^9.0.0",
    "next": "^9.5.1",
    "next-compose-plugins": "^2.2.1",
    "next-fonts": "^0.18.0",
    "next-optimized-images": "^2.6.2",
    "next-redux-wrapper": "^3.0.0",
    "next-routes": "^1.4.2",
    "next-seo": "^4.22.0",
    "next-videos": "^1.4.0",
    "parallax-js": "^3.1.0",
    "postcss-flexbugs-fixes": "^5.0.2",
    "postcss-preset-env": "^6.7.0",
    "react": "^16.13.1",
    "react-accessible-accordion": "^3.3.4",
    "react-device-detect": "^1.17.0",
    "react-dom": "^17.0.2",
    "react-image-lightbox": "^5.1.1",
    "react-masonry-component": "^6.2.1",
    "react-minimal-pie-chart": "^8.2.0",
    "react-modal-video": "^1.2.6",
    "react-owl-carousel3": "^2.2.5",
    "react-preloading-screen": "^1.0.2",
    "react-redux": "^7.2.3",
    "react-share": "^4.4.0",
    "react-stripe-checkout": "^2.6.3",
    "react-toastify": "^7.0.3",
    "react-visibility-sensor": "^5.1.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0",
    "sass": "^1.32.8",
    "segfault-handler": "^1.3.0",
    "semver": "^7.3.4",
    "typed.js": "^2.0.11",
    "wowjs": "^1.1.3"
  },
  "devDependencies": {
    "@fullhuman/postcss-purgecss": "^4.0.3",
    "@types/node": "^14.14.19",
    "@types/react": "^17.0.0",
    "nextjs-sitemap-generator": "^1.3.1",
    "postcss": "^8.2.8",
    "redux-devtools-extension": "^2.13.9",
    "typescript": "^4.1.3"
  }
}
--------------------------------------------------
14.15.3--------------------------------------------------
import express from "express";
import next from "next";
import path from "path";
import bodyParser from "body-parser";
// import stripe from "stripe"(keys.stripeSecretKey);
// import fs from "fs";
import http from "http";
// import https from "https";
import compression from "compression";
import helmet from "helmet";
import sitemap from "nextjs-sitemap-generator";

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

if (!dev) {
	sitemap({
		baseUrl: "https://naqib.info",
		pagesDirectory: __dirname + "/.next/server/pages",
		targetDirectory: "public/",
		ignoredExtensions: ["js", "map"],
		ignoredPaths: ["assets"], // Exclude everything that isn't static page
		sitemapFilename: "sitemap.xml",
		nextConfigPath: __dirname + "/next.config.js",
	});
}

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const allowedPath = [
	"/about-me",
	"/blog",
	"/public",
	"/images",
	"/blog-details",
]; // TODO: add allowed path until website is complete

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

	if (!dev) {
		server.use(compression()); //Compress all routes
		server.use(
			helmet({
				contentSecurityPolicy: false,
			})
		); //protect against well known vulnerabilities
	}

	server.get("*", (req, res) => {
		//Only serving allowed path
		// if (req.originalUrl === "/") return handle(req, res);

		// let foundPath = false;
		// allowedPath.forEach((e) => {
		// 	if (req.originalUrl.includes(e) && !foundPath) {
		// 		console.log(`	url allowed for ${e}`);
		// 		foundPath = true;
		// 	}
		// });

		// console.log(`	${req.originalUrl} ${foundPath}`);
		// if (foundPath || dev)return handle(req, res);

		return handle(req, res);

		return app.render(req, res, "/coming-soon"); //FOR COMING SOON PAGE REDIRECT
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
--------------------------------------------------
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "module": "commonjs",
      "outDir": "dist",
      "noEmit": false
    },
    "include": ["server"]
  }--------------------------------------------------
{
  "compilerOptions": {
    // "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "target": "es5",
    "module": "esnext"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx", "check_node_version.js"
  ]
}
--------------------------------------------------
const semver = require ("semver");
const { engines } = require ("./package");
const version = engines.node;
 if (!semver.satisfies(process.version, version)) {
  throw new Error(`The current node version${process.version} does not satisfy the required version ${version} .`);
}--------------------------------------------------
$font-family: "Rubik", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;
$template-color: #38d16a;
$pink-color: #f54ea2;
$blue-color: #151448;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;
$transition: 0.5s;
$font-size: 15px;

/*================================================
Signup CSS
=================================================*/
.signup-form {
	background: $white-color;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 40px;
	border-radius: 5px;

	h3 {
		font: {
			size: 22px;
		}
		margin-bottom: 25px;
	}
	form {
		.form-check {
			margin-top: 10px;

			.form-check-label {
				color: $paragraph-color;
			}
		}
		.btn {
			margin: {
				bottom: 20px;
				top: 20px;
			}
		}
		span {
			display: block;
			color: $paragraph-color;

			a {
				color: $template-color;
			}
		}
	}
}

/*================================================
FAQ CSS
=================================================*/
.faq-accordion {
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	background: $white-color;
	border-radius: 10px;

	.accordion {
		border: none;

		.accordion__item {
			display: block;
			margin-bottom: 15px;

			&:last-child {
				margin-bottom: 0;
			}
			.accordion__button {
				display: block;
				padding: 20px 30px;
				text-decoration: none;
				background: #f5f9ff;
				cursor: pointer;
				transition: $transition;
				outline: 0;
				font: {
					size: 20px;
					weight: 500;
				}

				&:hover,
				&.active,
				&:focus {
					background: $template-color;
					color: $white-color;
				}
				&.active {
					border-radius: 0;
				}
			}
			.accordion-content {
				position: relative;
				overflow: hidden;
				padding: 0;
				line-height: 1.9;
			}
		}
		.accordion__item + .accordion__item {
			border: none;
		}
	}
}
.faq-contact {
	margin-top: 45px;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	border-radius: 4px;

	h3 {
		font: {
			size: 25px;
		}
		margin-bottom: 25px;
	}
	form {
		.btn {
			margin-top: 15px;
		}
	}
}

/*================================================
Coming Soon CSS
=================================================*/
.coming-soon {
	position: relative;
	z-index: 1;
	background: {
		image: url(../../images/coming-soon-banner-min.jpg);
		position: center center;
		size: cover;
		attachment: fixed;
		repeat: no-repeat;
	}
	height: 100vh;
	text-align: center;
	overflow: hidden;

	&::before {
		z-index: -1;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: $black-color;
		opacity: 0.9;
		content: "";
		position: absolute;
	}
	.coming-soon-content {
		max-width: 650px;
		margin: 0 auto;

		h1 {
			color: $white-color;
			font: {
				size: 45px;
				weight: 700;
			}
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		h2 {
			color: $white-color;
			font: {
				size: 30px;
				weight: 700;
			}
			white-space: nowrap;
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		p {
			color: #c7c3c7;
			margin: {
				top: 20px;
				bottom: 35px;
			}
			font: {
				size: 15px;
				weight: 500;
			}
		}
		form {
			position: relative;

			.form-control {
				background: transparent;
				border: 1px solid $white-color;
				border-radius: 50px;
				color: $white-color;
				padding-left: 15px;
				height: 55px;

				&:focus {
					border-color: $template-color;
				}
				&::placeholder {
					color: $white-color;
				}
			}
			button {
				position: absolute;
				right: 0;
				height: 100%;
				background: $template-color;
				top: 0;
				color: $white_color;
				border: none;
				width: 130px;
				font-weight: 500;
				cursor: pointer;
				text-transform: uppercase;
				border-radius: 0 50px 50px 0;
				transition: $transition;

				&:hover {
					background: $pink-color;
				}
			}
		}
		#timer {
			margin-bottom: 35px;

			div {
				display: inline-block;
				font: {
					size: 45px;
					weight: 600;
				}
				color: $white-color;
				width: 135px;
				height: 135px;
				border: 1px solid #eeeeee;
				border-radius: 50%;
				padding-top: 34px;
				line-height: 40px;
				margin: 0 5px;
			}
			span {
				display: block;
				font: {
					size: 17px;
					weight: 400;
				}
			}
		}
	}
}

/*================================================
404 Error CSS
=================================================*/
.error {
	background: url(../../images/error.gif) no-repeat center center fixed;
	background-size: cover;
	height: 100vh;
	text-align: center;
	position: relative;
	&::before {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000;
		top: 0;
		left: 0;
		content: "";
		opacity: 0.6;
	}

	h1 {
		font-size: 260px;
		margin: 0;
		color: $white-color;
		position: relative;
	}
	h2 {
		font-size: 30px;
		margin: 0 0 35px;
		color: $white-color;
		position: relative;

		i {
			font-size: 1.5em;
			margin-left: 5px;
			position: relative;
			top: 5px;
		}
	}
}

/*================================================
Footer CSS
=================================================*/
.footer-area {
	position: relative;
	z-index: 1;
	overflow: hidden;
	background: $blue-color; //#08071c;

	.line-bg {
		position: absolute;
		top: -120px;
		right: -100px;
		margin: 0 auto;
		text-align: center;
		left: 0;
		opacity: 0.6;
		z-index: -1;
	}
	.shape18 {
		top: 55%;
		left: 2%;
	}
	.shape21 {
		top: 15%;
		right: 5%;
	}
	.shape7 {
		right: 4%;
		top: 45%;
	}
}
.single-footer-widget {
	.logo {
		a {
			display: block;
		}
		margin-bottom: 17px;
	}
	p {
		margin-bottom: 20px;
		color: $white-color;
	}
	h3 {
		font-size: 22px;
		color: $white-color;
		margin-bottom: 30px;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;

		&.social-links {
			li {
				display: inline-block;
				a {
					width: 35px;
					height: 35px;
					line-height: 35px;
					font-size: 15px;
					background: $white-color;
					color: $black-color;
					text-align: center;
					border-radius: 50%;
					margin-right: 6px;
					&:hover {
						background: $template-color;
						color: $white-color;
					}
				}
			}
		}
		&.list {
			li {
				margin-bottom: 12px;
				position: relative;
				padding-left: 15px;

				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: $template-color;
					margin-top: -4px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-recent-post {
			li {
				margin-bottom: 14px;

				a {
					color: $white-color;
					font-weight: 500;

					&:hover {
						color: $template-color;
					}
				}
				span {
					display: block;
					color: $template-color;
					margin-top: 8px;
					font-size: 13px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-contact-info {
			li {
				color: $white-color;
				margin-bottom: 12px;
				position: relative;
				padding-left: 25px;
				span {
					margin-right: 5px;
				}
				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&:last-child {
					margin-bottom: 0;
				}
				i {
					position: absolute;
					color: $template-color;
					left: 0;
					top: 50%;
					margin-top: -8px;
					font-size: 17px;
				}
			}
		}
	}
}
.copyright-area {
	margin-top: 120px;
	border-top: 1px solid #444352;
	padding: {
		top: 30px;
		bottom: 30px;
	}
	p {
		color: $white-color;

		a {
			color: $template-color;

			&:hover {
				color: $pink-color;
			}
		}
	}
}

/*================================================
Go Top CSS
=================================================*/
.go-top {
	position: fixed;
	cursor: pointer;
	bottom: 15px;
	right: 15px;
	font-size: 25px;
	color: $white-color;
	background-color: $template-color;
	z-index: 4;
	// display: none;
	width: 50px;
	text-align: center;
	height: 50px;
	line-height: 50px;
	border-radius: 50%;
	transition: $transition;

	&:hover {
		color: $white-color;
		background: $pink-color;
	}
}
// .modal {
// 	background: #0000004f;
// }
.thank-you-area {
	text-align: center;
	padding: {
		top: 150px;
		bottom: 150px;
	}
	h1 {
		margin-bottom: 15px;
	}
}

/*================================================
Animation CSS
=================================================*/
.item-enter {
	opacity: 0;
}
.item-enter-active {
	opacity: 1;
	transition: opacity 500ms ease-in;
}
.item-exit {
	opacity: 1;
}
.item-exit-active {
	opacity: 0;
	transition: opacity 0ms ease-in;
	display: none;
}


/*================================================
Margin CSS
=================================================*/
/*
This .scss loop will create "margin helpers" and "padding helpers" for use in your web projects.
It will generate several classes such as:
.m-r-10 which gives margin-right 10 pixels.
.m-r-15 gives MARGIN to the RIGHT 15 pixels.
.m-t-15 gives MARGIN to the TOP 15 pixels and so on.
.p-b-5 gives PADDING to the BOTTOM of 5 pixels
.p-l-40 gives PADDING to the LEFT of 40 pixels
The first letter is "m" or "p" for MARGIN or PADDING
Second letter is "t", "b", "l", or "r" for TOP, BOTTOM, LEFT, or RIGHT
Third letter is the number of spacing in pixels. Adjust the amounts generated by editing the $spaceamounts variable below.
*/

$spaceamounts: (
	5,
	10,
	15,
	20,
	25,
	30,
	35,
	40,
	45,
	50,
	75,
	100,
	200
); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
	@each $side in $sides {
		.m-#{str-slice($side, 0, 1)}-#{$space} {
			margin-#{$side}: #{$space}px !important;
		}

		.p-#{str-slice($side, 0, 1)}-#{$space} {
			padding-#{$side}: #{$space}px !important;
		}
	}
}

div[disabled] {
	pointer-events: none;
	opacity: 0.2;
}

ul[disabled] {
	pointer-events: none;
	opacity: 0.2;
}
.disable {
	pointer-events: none;
	opacity: 0.2;
}

// Navbar
.nav-item{
	a{
		white-space: nowrap;	
	}
}--------------------------------------------------
.git/
docs/
node_modules
npm-debug.log
unused_pages/
package-lock.json--------------------------------------------------
<?xml version="1.0" encoding="UTF-8"?>
      <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      </urlset>--------------------------------------------------
Sitemap: [https://naqib.info/sitemap.xml]

User-agent: *
Allow: /*

Disallow: /api/*--------------------------------------------------
{
  "name": "naqib_personal_website",
  "version": "1.5.0",
  "description": "Built from scrach",
  "main": "index.js",
  "scripts": {
    "dev": "node server.mjs -p $PORT",
    "build": "NODE_ENV=development next build ",
    "start": "NODE_ENV=$NODE_ENV node server.mjs -p $PORT",
    "requirements-check": "node --experimental-json-modules check_node_version.js ",
    "predev": "npm run requirements-check"
  },
  "engines": {
    "node": ">=14.15.3"
  },
  "engineStrict": true,
  "author": "Ajmain Naqib",
  "license": "ISC",
  "dependencies": {
    "@apollo/client": "^3.3.12",
    "@babel/runtime-corejs2": "^7.9.2",
    "@zeit/next-css": "^1.0.1",
    "@zeit/next-sass": "^1.0.1",
    "axios": "^0.21.1",
    "body-parser": "^1.19.0",
    "compression": "^1.7.4",
    "express": "^4.17.1",
    "graphql": "^15.5.0",
    "helmet": "^4.4.1",
    "imagemin-mozjpeg": "^9.0.0",
    "imagemin-optipng": "^8.0.0",
    "imagemin-svgo": "^9.0.0",
    "next": "^9.5.1",
    "next-compose-plugins": "^2.2.1",
    "next-fonts": "^0.18.0",
    "next-optimized-images": "^2.6.2",
    "next-redux-wrapper": "^3.0.0",
    "next-routes": "^1.4.2",
    "next-seo": "^4.22.0",
    "next-videos": "^1.4.0",
    "parallax-js": "^3.1.0",
    "postcss-flexbugs-fixes": "^5.0.2",
    "postcss-preset-env": "^6.7.0",
    "react": "^16.13.1",
    "react-accessible-accordion": "^3.3.4",
    "react-device-detect": "^1.17.0",
    "react-dom": "^17.0.2",
    "react-image-lightbox": "^5.1.1",
    "react-masonry-component": "^6.2.1",
    "react-minimal-pie-chart": "^8.2.0",
    "react-modal-video": "^1.2.6",
    "react-owl-carousel3": "^2.2.5",
    "react-preloading-screen": "^1.0.2",
    "react-redux": "^7.2.3",
    "react-share": "^4.4.0",
    "react-stripe-checkout": "^2.6.3",
    "react-toastify": "^7.0.3",
    "react-visibility-sensor": "^5.1.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0",
    "sass": "^1.32.8",
    "segfault-handler": "^1.3.0",
    "semver": "^7.3.4",
    "typed.js": "^2.0.11",
    "wowjs": "^1.1.3"
  },
  "devDependencies": {
    "@fullhuman/postcss-purgecss": "^4.0.3",
    "@types/node": "^14.14.19",
    "@types/react": "^17.0.0",
    "nextjs-sitemap-generator": "^1.3.1",
    "postcss": "^8.2.8",
    "redux-devtools-extension": "^2.13.9",
    "typescript": "^4.1.3"
  }
}
--------------------------------------------------
14.15.3--------------------------------------------------
import express from "express";
import next from "next";
import path from "path";
import bodyParser from "body-parser";
// import stripe from "stripe"(keys.stripeSecretKey);
// import fs from "fs";
import http from "http";
// import https from "https";
import compression from "compression";
import helmet from "helmet";
import sitemap from "nextjs-sitemap-generator";

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

if (!dev) {
	sitemap({
		baseUrl: "https://naqib.info",
		pagesDirectory: __dirname + "/.next/server/pages",
		targetDirectory: "public/",
		ignoredExtensions: ["js", "map"],
		ignoredPaths: ["assets"], // Exclude everything that isn't static page
		sitemapFilename: "sitemap.xml",
		nextConfigPath: __dirname + "/next.config.js",
	});
}

const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();

const allowedPath = [
	"/about-me",
	"/blog",
	"/public",
	"/images",
	"/blog-details",
]; // TODO: add allowed path until website is complete

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

	if (!dev) {
		server.use(compression()); //Compress all routes
		server.use(
			helmet({
				contentSecurityPolicy: false,
			})
		); //protect against well known vulnerabilities
	}

	server.get("*", (req, res) => {
		//Only serving allowed path
		// if (req.originalUrl === "/") return handle(req, res);

		// let foundPath = false;
		// allowedPath.forEach((e) => {
		// 	if (req.originalUrl.includes(e) && !foundPath) {
		// 		console.log(`	url allowed for ${e}`);
		// 		foundPath = true;
		// 	}
		// });

		// console.log(`	${req.originalUrl} ${foundPath}`);
		// if (foundPath || dev)return handle(req, res);

		return handle(req, res);

		return app.render(req, res, "/coming-soon"); //FOR COMING SOON PAGE REDIRECT
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
--------------------------------------------------
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "module": "commonjs",
      "outDir": "dist",
      "noEmit": false
    },
    "include": ["server"]
  }--------------------------------------------------
{
  "compilerOptions": {
    // "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "target": "es5",
    "module": "esnext"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx", "check_node_version.js"
  ]
}
--------------------------------------------------
const semver = require ("semver");
const { engines } = require ("./package");
const version = engines.node;
 if (!semver.satisfies(process.version, version)) {
  throw new Error(`The current node version${process.version} does not satisfy the required version ${version} .`);
}--------------------------------------------------
$font-family: "Rubik", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;
$template-color: #38d16a;
$pink-color: #f54ea2;
$blue-color: #151448;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;
$transition: 0.5s;
$font-size: 15px;

/*================================================
Signup CSS
=================================================*/
.signup-form {
	background: $white-color;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 40px;
	border-radius: 5px;

	h3 {
		font: {
			size: 22px;
		}
		margin-bottom: 25px;
	}
	form {
		.form-check {
			margin-top: 10px;

			.form-check-label {
				color: $paragraph-color;
			}
		}
		.btn {
			margin: {
				bottom: 20px;
				top: 20px;
			}
		}
		span {
			display: block;
			color: $paragraph-color;

			a {
				color: $template-color;
			}
		}
	}
}

/*================================================
FAQ CSS
=================================================*/
.faq-accordion {
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	background: $white-color;
	border-radius: 10px;

	.accordion {
		border: none;

		.accordion__item {
			display: block;
			margin-bottom: 15px;

			&:last-child {
				margin-bottom: 0;
			}
			.accordion__button {
				display: block;
				padding: 20px 30px;
				text-decoration: none;
				background: #f5f9ff;
				cursor: pointer;
				transition: $transition;
				outline: 0;
				font: {
					size: 20px;
					weight: 500;
				}

				&:hover,
				&.active,
				&:focus {
					background: $template-color;
					color: $white-color;
				}
				&.active {
					border-radius: 0;
				}
			}
			.accordion-content {
				position: relative;
				overflow: hidden;
				padding: 0;
				line-height: 1.9;
			}
		}
		.accordion__item + .accordion__item {
			border: none;
		}
	}
}
.faq-contact {
	margin-top: 45px;
	box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
	padding: 60px;
	border-radius: 4px;

	h3 {
		font: {
			size: 25px;
		}
		margin-bottom: 25px;
	}
	form {
		.btn {
			margin-top: 15px;
		}
	}
}

/*================================================
Coming Soon CSS
=================================================*/
.coming-soon {
	position: relative;
	z-index: 1;
	background: {
		image: url(../../images/coming-soon-banner-min.jpg);
		position: center center;
		size: cover;
		attachment: fixed;
		repeat: no-repeat;
	}
	height: 100vh;
	text-align: center;
	overflow: hidden;

	&::before {
		z-index: -1;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: $black-color;
		opacity: 0.9;
		content: "";
		position: absolute;
	}
	.coming-soon-content {
		max-width: 650px;
		margin: 0 auto;

		h1 {
			color: $white-color;
			font: {
				size: 45px;
				weight: 700;
			}
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		h2 {
			color: $white-color;
			font: {
				size: 30px;
				weight: 700;
			}
			white-space: nowrap;
			text-transform: uppercase;
			margin-bottom: 0;
			line-height: 55px;
		}
		p {
			color: #c7c3c7;
			margin: {
				top: 20px;
				bottom: 35px;
			}
			font: {
				size: 15px;
				weight: 500;
			}
		}
		form {
			position: relative;

			.form-control {
				background: transparent;
				border: 1px solid $white-color;
				border-radius: 50px;
				color: $white-color;
				padding-left: 15px;
				height: 55px;

				&:focus {
					border-color: $template-color;
				}
				&::placeholder {
					color: $white-color;
				}
			}
			button {
				position: absolute;
				right: 0;
				height: 100%;
				background: $template-color;
				top: 0;
				color: $white_color;
				border: none;
				width: 130px;
				font-weight: 500;
				cursor: pointer;
				text-transform: uppercase;
				border-radius: 0 50px 50px 0;
				transition: $transition;

				&:hover {
					background: $pink-color;
				}
			}
		}
		#timer {
			margin-bottom: 35px;

			div {
				display: inline-block;
				font: {
					size: 45px;
					weight: 600;
				}
				color: $white-color;
				width: 135px;
				height: 135px;
				border: 1px solid #eeeeee;
				border-radius: 50%;
				padding-top: 34px;
				line-height: 40px;
				margin: 0 5px;
			}
			span {
				display: block;
				font: {
					size: 17px;
					weight: 400;
				}
			}
		}
	}
}

/*================================================
404 Error CSS
=================================================*/
.error {
	background: url(../../images/error.gif) no-repeat center center fixed;
	background-size: cover;
	height: 100vh;
	text-align: center;
	position: relative;
	&::before {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000;
		top: 0;
		left: 0;
		content: "";
		opacity: 0.6;
	}

	h1 {
		font-size: 260px;
		margin: 0;
		color: $white-color;
		position: relative;
	}
	h2 {
		font-size: 30px;
		margin: 0 0 35px;
		color: $white-color;
		position: relative;

		i {
			font-size: 1.5em;
			margin-left: 5px;
			position: relative;
			top: 5px;
		}
	}
}

/*================================================
Footer CSS
=================================================*/
.footer-area {
	position: relative;
	z-index: 1;
	overflow: hidden;
	background: $blue-color; //#08071c;

	.line-bg {
		position: absolute;
		top: -120px;
		right: -100px;
		margin: 0 auto;
		text-align: center;
		left: 0;
		opacity: 0.6;
		z-index: -1;
	}
	.shape18 {
		top: 55%;
		left: 2%;
	}
	.shape21 {
		top: 15%;
		right: 5%;
	}
	.shape7 {
		right: 4%;
		top: 45%;
	}
}
.single-footer-widget {
	.logo {
		a {
			display: block;
		}
		margin-bottom: 17px;
	}
	p {
		margin-bottom: 20px;
		color: $white-color;
	}
	h3 {
		font-size: 22px;
		color: $white-color;
		margin-bottom: 30px;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;

		&.social-links {
			li {
				display: inline-block;
				a {
					width: 35px;
					height: 35px;
					line-height: 35px;
					font-size: 15px;
					background: $white-color;
					color: $black-color;
					text-align: center;
					border-radius: 50%;
					margin-right: 6px;
					&:hover {
						background: $template-color;
						color: $white-color;
					}
				}
			}
		}
		&.list {
			li {
				margin-bottom: 12px;
				position: relative;
				padding-left: 15px;

				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&::before {
					content: "";
					position: absolute;
					left: 0;
					top: 50%;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: $template-color;
					margin-top: -4px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-recent-post {
			li {
				margin-bottom: 14px;

				a {
					color: $white-color;
					font-weight: 500;

					&:hover {
						color: $template-color;
					}
				}
				span {
					display: block;
					color: $template-color;
					margin-top: 8px;
					font-size: 13px;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		&.footer-contact-info {
			li {
				color: $white-color;
				margin-bottom: 12px;
				position: relative;
				padding-left: 25px;
				span {
					margin-right: 5px;
				}
				a {
					color: $white-color;

					&:hover {
						color: $template-color;
					}
				}
				&:last-child {
					margin-bottom: 0;
				}
				i {
					position: absolute;
					color: $template-color;
					left: 0;
					top: 50%;
					margin-top: -8px;
					font-size: 17px;
				}
			}
		}
	}
}
.copyright-area {
	margin-top: 120px;
	border-top: 1px solid #444352;
	padding: {
		top: 30px;
		bottom: 30px;
	}
	p {
		color: $white-color;

		a {
			color: $template-color;

			&:hover {
				color: $pink-color;
			}
		}
	}
}

/*================================================
Go Top CSS
=================================================*/
.go-top {
	position: fixed;
	cursor: pointer;
	bottom: 15px;
	right: 15px;
	font-size: 25px;
	color: $white-color;
	background-color: $template-color;
	z-index: 4;
	// display: none;
	width: 50px;
	text-align: center;
	height: 50px;
	line-height: 50px;
	border-radius: 50%;
	transition: $transition;

	&:hover {
		color: $white-color;
		background: $pink-color;
	}
}
// .modal {
// 	background: #0000004f;
// }
.thank-you-area {
	text-align: center;
	padding: {
		top: 150px;
		bottom: 150px;
	}
	h1 {
		margin-bottom: 15px;
	}
}

/*================================================
Animation CSS
=================================================*/
.item-enter {
	opacity: 0;
}
.item-enter-active {
	opacity: 1;
	transition: opacity 500ms ease-in;
}
.item-exit {
	opacity: 1;
}
.item-exit-active {
	opacity: 0;
	transition: opacity 0ms ease-in;
	display: none;
}


/*================================================
Margin CSS
=================================================*/
/*
This .scss loop will create "margin helpers" and "padding helpers" for use in your web projects.
It will generate several classes such as:
.m-r-10 which gives margin-right 10 pixels.
.m-r-15 gives MARGIN to the RIGHT 15 pixels.
.m-t-15 gives MARGIN to the TOP 15 pixels and so on.
.p-b-5 gives PADDING to the BOTTOM of 5 pixels
.p-l-40 gives PADDING to the LEFT of 40 pixels
The first letter is "m" or "p" for MARGIN or PADDING
Second letter is "t", "b", "l", or "r" for TOP, BOTTOM, LEFT, or RIGHT
Third letter is the number of spacing in pixels. Adjust the amounts generated by editing the $spaceamounts variable below.
*/

$spaceamounts: (
	5,
	10,
	15,
	20,
	25,
	30,
	35,
	40,
	45,
	50,
	75,
	100,
	200
); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
	@each $side in $sides {
		.m-#{str-slice($side, 0, 1)}-#{$space} {
			margin-#{$side}: #{$space}px !important;
		}

		.p-#{str-slice($side, 0, 1)}-#{$space} {
			padding-#{$side}: #{$space}px !important;
		}
	}
}

div[disabled] {
	pointer-events: none;
	opacity: 0.2;
}

ul[disabled] {
	pointer-events: none;
	opacity: 0.2;
}
.disable {
	pointer-events: none;
	opacity: 0.2;
}

// Navbar
.nav-item{
	a{
		white-space: nowrap;	
	}
}--------------------------------------------------
$media: screen;
$feature_min: min-width;
$feature_max: max-width;

// Extra small devices (portrait phones, less than 576px)
$value_xs: 575px;

// Small devices (landscape phones, 576px and up)
$value_sm: 576px;

// Medium devices (tablets, 768px and up)
$value_md: 767px;
$value_md_offset: 768px;

// Large devices (desktops, 992px and up)
$value_lg: 992px;
$value_lg_offset: 993px;

// Extra large devices (large desktops, 1200px and up)
$value_xl: 1200px;
$value_xl_offset: 1201px;

// Extra extra large devices (TVs, large screens, 1600px and up)
$value_xx: 1600px;

$template-color: #38d16a;
$pink-color: #f54ea2;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;

// Only For Mobile and Tab Navbar
@media only #{$media} and ($feature_max : $value_md) {
  .searchBoxTop {
    .seachBoxContainer {
      padding: 25px 0 55px;
    }
    .searchClose {
      cursor: pointer;
      position: absolute;
      top: auto;
      right: 11px;
      width: 40px;
      height: 40px;
      margin-top: 0;
      bottom: 11px;
    }
  }
}

@media screen and (max-width: $value_md_offset) and (orientation: portrait) {
  .contact-card {
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  .card.image,
  .card.info {
    flex: 1;
  }

  .card.image {
    order: 2;
  }

  .card.info {
    order: 1;
  }

  // @media screen and (max-width: $value_md) and (orientation: portrait) {
  //   .contact-card {
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-between;
  //     align-items: center;
  //     // padding: 1em;
  //     border: 4px solid #000;
  //     width: 600px;
  //     height: 100%;
  //     // margin: 0 auto;
  //   }

  //   .card .image {
  //     flex: 2;
  //     justify-content: flex-end;

  //   }

  //   .card .info {
  //     flex: 1;
  //     justify-content: flex-start;

  //   }

  //   .card {
  //     flex-direction: column;
  //   }

  // @media only #{$media} and ($feature_max : $value_xs) {
  .parallax_banner {
    // img {
    //   display: none;
    // }
    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      width: 35%; /* adjust this as needed */
      // margin-left: 20% !important;
      margin-top: -5%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }
}

// ipad 
@media screen and (min-width: $value_md_offset) and (orientation: landscape){
  .parallax_banner {

    h1 {
      font-size: min(max(6vw, 24px), 42px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }

    overflow: visible;
    display: flex;
    align-items: center;

    .imgHolder {
      z-index: 1;
      position: relative;
      width: 38vw; /* adjust this as needed */
      margin-left: 54vw !important;
      // margin-top: -5%;
      // bottom: 0 !important;
      top:0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60%;
  }

  .ptb-120 {
    padding: {
      top: 60px;
      bottom: 60px;
    }
  }
  .owl-carousel {
    &.owl-theme {
      .owl-dots {
        right: 15px;
        top: auto;
        bottom: 10px;

        .owl-dot {
          display: inline-block;

          span {
            margin: 0 3px;
            width: 15px;
            height: 15px;
          }
        }
      }
      .owl-nav {
        [class*="owl-"] {
          font-size: 16px;
          margin: -20px 0 0;
          left: 0;
          width: 35px;
          height: 35px;
          line-height: 38px;

          &.owl-next {
            right: 0;
            left: auto;
          }
        }
      }
    }
  }
  .btn {
    font-size: 14px;
    padding: 12px 25px;
  }
  p {
    font-size: 14px;
  }
  .preloader {
    .loader {
      h1 {
        font-size: 3rem;
      }
    }
  }
  .section-title {
    margin-bottom: 40px;

    span {
      font-size: 14px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 24px;
      max-width: 100%;
    }
  }
  .artflex-nav {
    padding-top: 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .navbar {
      padding: {
        left: 0;
        right: 0;
      }
    }
    .navbar-light {
      .navbar-toggler {
        border-color: rgba(0, 0, 0, 1);
        outline: 0;
        border-radius: 0;
      }
    }
    nav {
      .navbar-nav {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: $white-color;

        .nav-item {
          padding: 9px 2%;

          a {
            margin-left: 0;
            margin-right: 0;
          }
          .dropdown_menu {
            left: 0;

            li {
              .dropdown_menu {
                top: 0;
                left: -5px;
                position: relative;
                display: none;
                margin-top: 0;
                border: 1px solid #eeeeee;
                padding: 0 0 0 4px;
              }
              &:focus,
              &:hover {
                .dropdown_menu {
                  display: block;
                  top: 0 !important;
                }
              }
            }
          }
          &:hover ul {
            top: 40px;
          }
        }
      }
      .others-option {
        background-color: $white-color;
        padding-bottom: 10px;
        margin-left: 0;
        padding-left: 15px;

        ul li .side-menu {
          display: none;
        }
      }
    }
  }
  .shop-details .product-entry-summary form .input-counter {
    max-width: 120px;
    min-width: 120px;
  }
  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 30px;
    }
  }
  .banner-social-buttons {
    display: none;
  }

  .hero-header {
    // font-size: 25px !important;
  }
  .hero-content {
    h1 {
      // font-size: 27px;
    }
    h3 {
      // font-size: 25px !important;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
    margin-top: 0;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 330px;
      left: 0;
      margin: auto;
      width: 100%;
    }
  }
  .skill-image {
    text-align: center;
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  // .shape1,
  // .shape2,
  // .shape7,
  // .shape8,
  // .shape5,
  // .shape6,
  // .shape10,
  // .shape4,
  // .shape3,
  // .circle-shape1,
  // .circle-shape2,
  // .shape11,
  // .shape12,
  // .shape9,
  // .shape14,
  // .shape15,
  // .shape13,
  // .shape18,
  // .shape19,
  // .shape20,
  // .shape21,
  // .shape22,
  // .shape23,
  // .shape24,
  // .shape25,
  // .shape26,
  // .circle-dot {
  //   display: none;
  // }
  .circle-shape3 {
    right: 6%;
    bottom: 5%;
  }
  .circle-top {
    top: -440px;
    left: -350px;
  }
  .circle-bottom {
    bottom: -440px;
    right: -350px;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
        h1 {
          margin-bottom: 25px;
        }
      }
    }
  }
  .agency-portfolio-home {
    .main-banner {
      padding: {
        top: 145px;
        bottom: 90px;
      }

      .hero-content {
        h1 {
          font-size: 35px;
        }
      }
    }
  }
  .blog-home-slides {
    .col-lg-12 {
      padding: 0;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;

      div {
        &.tags {
          a {
            padding: 5px 15px;
            font-size: 14px;
          }
        }
      }
      h3 {
        margin: 15px 0 10px;
        font-size: 18px;
        line-height: 27px;
      }
      ul {
        li {
          margin-right: 2px;
          font-size: 12px;

          i {
            margin-right: 2px;
          }
        }
      }
    }
  }
  .blog-home-slides {
    &:hover {
      &.owl-carousel {
        &.owl-theme {
          .owl-nav {
            [class*="owl-"] {
              left: 5px;

              &.owl-next {
                right: 5px;
                left: auto;
              }
            }
          }
        }
      }
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }

  .cta-about {
    padding: {
      top: 60px;
      bottom: 60px;
      left: 10px;
      right: 5px;
    }
    .container-fluid {
      padding: {
        left: 15px !important;
        right: 15px !important;
      }
    }
  }
  .cta-about-image {
    background-image: unset;

    img {
      display: block;
    }
  }
  .cta-about-content {
    max-width: 100%;
    margin: {
      top: 35px;
    }
    padding: 0;
    h2 {
      br {
        display: none;
      }
    }
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;
      padding: 25px 8px;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
      i {
        font-size: 30px;
      }
      h6 {
        font-size: 15px;
      }
    }
  }
  .crafting-image {
    .video-btn {
      font-size: 20px;
      margin-top: -30px;
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }

  .services-area {
    padding-bottom: 30px;
  }
  .single-services {
    padding: 20px;

    h3 {
      font-size: 18px;
    }
  }
  .more-services-btn {
    margin-top: 15px;
  }
  .single-services-box {
    padding: 15px;

    .icon {
      font-size: 40px;
    }
    h3 {
      font-size: 18px;
    }
  }
  .services-box {
    .services-content {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .services-area {
    .single-services {
      padding: 15px;
    }
  }
  .services-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-dots {
          margin-top: 10px !important;

          button {
            &.owl-dot {
              span {
                margin: 0 3px;
                width: 14px;
                height: 14px;
              }
            }
          }
        }
      }
    }
  }

  .why-choose-us-img {
    margin-bottom: 30px;

    .front-img {
      top: 0;
      left: 0;
      width: 100%;
    }
    .back-img {
      display: none;
    }
  }
  .why-choose-us-area {
    &:hover {
      .why-choose-us-img {
        .front-img {
          top: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 45px;

    .section-title {
      margin-bottom: 10px;

      h2 {
        max-width: 100%;
      }
    }
    .single-box {
      padding: 20px;
      margin-top: 30px;

      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }

  .how-we-work {
    padding-bottom: 30px;
  }
  .single-work-box {
    margin-bottom: 30px;
    padding: 20px 15px;
    text-align: center;

    .number {
      display: inline-block;
    }
    h3 {
      font-size: 18px;
    }
  }

  .team-member-image {
    text-align: center;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 60px;
      bottom: 30px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        font-size: 40px;
        color: $template-color;
      }
      h3 {
        font-size: 18px;
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-boxes-area {
    padding-bottom: 30px;

    .single-box {
      margin-bottom: 30px;
      padding-left: 55px;

      span {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }

  .about-image {
    margin-top: 30px;
    text-align: center;

    &::before {
      display: none;
    }
    img {
      width: auto;
    }
  }

  .single-work {
    .works-content {
      h3 {
        font-size: 18px;
        margin-bottom: 0;
      }
      p {
        display: none;
      }
    }
    &:hover {
      .works-content {
        margin-top: -25px;
      }
    }
  }

  .portfolio-item {
    img {
      width: 100%;
    }
    .portfolio-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .single-feedback {
    padding-left: 0;
    max-width: 100%;
    margin-bottom: 40px;

    img {
      position: relative;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 18px;

      span {
        font-size: 14px;
      }
    }
  }
  .feedback-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          left: 0;
          bottom: -5px;
          right: 0;
        }
      }
    }
  }

  .skill-content {
    padding-left: 0 !important;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }

  .team-area {
    padding-bottom: 30px;
  }
  .single-team {
    .team-content {
      margin-top: 30px;

      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  .single-team-box {
    .team-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .cta-content {
    span {
      font-size: 13px;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 25px;
    }
  }

  .skill-area {
    padding: {
      top: 60px;
    }
  }
  .our-skill {
    margin-bottom: 30px;

    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }
  .skill-image {
    .back-image {
      right: 0;
    }
  }

  .funfacts-area {
    padding-bottom: 40px;
  }
  .funfact {
    margin-bottom: 20px;

    h3 {
      font-size: 30px;
    }
    p {
      font-size: 13px;
      text-transform: capitalize;
      margin-top: 3px;
    }
  }

  .blog-area {
    padding-bottom: 30px;
  }
  .single-blog-post {
    .blog-post-content {
      padding: 15px;

      .date {
        font-size: 13px;
      }
      h3 {
        line-height: 28px;
        font-size: 18px;
      }
    }
    .read-more-btn {
      font-size: 14px;
    }
    &.with-video {
      .blog-video {
        iframe {
          height: 160px;
        }
      }
    }
  }

  .contact-cta-content {
    .section-title {
      margin-bottom: 15px;
    }
    p {
      max-width: 100%;
      margin: 0 auto 25px;
    }
  }

  .features-content {
    .single-features-item {
      padding-left: 45px;

      .icon {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .features-image {
    margin-top: 30px;
  }

  .page-title-area {
    padding: {
      top: 160px;
      bottom: 85px;
    }
    h1 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 14px;
      }
    }
  }
  .pt-120 {
    padding-top: 50px;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .about-us-content {
    p {
      margin-top: 13px;
    }

    .single-about-box {
      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  .about-us-image {
    margin-top: 30px;
  }

  .pagination-area {
    margin-top: 15px;
  }

  .team-details-info {
    margin-top: 30px;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .personal-information {
      display: none;
    }
  }
  .overview-desc {
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }

  .login-form {
    padding: 20px;
    margin-top: 30px;

    h3 {
      font-size: 18px;
    }
    .text-right {
      text-align: left !important;
    }
  }

  .signup-form {
    padding: 20px;
    margin-bottom: 30px;

    h3 {
      font-size: 18px;
    }
  }

  .coming-soon {
    // height: 100%;
    padding: {
      top: 70px;
      bottom: 70px;
    }
    .coming-soon-content {
      h2 {
        font-size: 1em;
        line-height: 45px;
      }
      p {
        margin-top: 10px;
      }
      #timer {
        div {
          font-size: 40px;
          width: 120px;
          height: 120px;
          padding-top: 27px;
          line-height: 39px;
          margin: 0 5px 15px;
        }
      }
      form {
        button {
          position: relative;
          right: 0;
          top: 0;
          width: 100%;
          border-radius: 30px;
          margin-top: 10px;
          padding: 13px 0;
        }
      }
    }
  }

  .error {
    h1 {
      font-size: 140px;
    }
    h2 {
      font-size: 18px;
      margin: 0 0 30px;
    }
  }

  .faq-accordion {
    padding: 15px;

    .accordion {
      .accordion__item {
        .accordion__button {
          padding: 15px 15px;
          font-size: 16px;
        }
      }
    }
  }
  .faq-contact {
    margin-top: 30px;
    padding: 40px 15px;
    border-radius: 5px;
    text-align: center;

    h3 {
      font-size: 18px;
    }
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }

    .widget {
      h3,
      .widget-title {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }

  .blog-details-area {
    .blog-details {
      .article-img {
        .date {
          bottom: 2px;
          width: 65px;
          left: 2px;
          height: 60px;
          font-size: 15px;
          padding-top: 8px;
          line-height: 22px;
        }
      }
      .article-content {
        padding: 20px 15px;

        ul.category {
          margin-bottom: 20px;

          li {
            a {
              padding: 3px 14px 1px;
              margin-bottom: 3px;
              font-size: 13px;
            }
          }
        }
        h3 {
          font-size: 18px;
          margin-bottom: -10px;
          line-height: 26px;
        }
        .blockquote {
          padding: 20px 15px;
          border-left: 3px solid $template_color;

          p {
            font-size: 15px;
          }
        }
      }
    }
    .post-controls-buttons {
      text-align: center;
      padding: 20px 15px;

      div {
        a {
          padding: 7px 18px;
          font-size: 14px;
        }
      }
    }
    .post-comments {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
      }
      .single-comment {
        padding-left: 0;

        .comment-img {
          position: relative;
        }
        .comment-content {
          margin-top: 20px;
        }
        &.left-m {
          margin-left: 30px;
        }
      }
    }
    .leave-a-reply {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .form-group {
        margin-bottom: 10px;
      }
    }
  }

  .project-info {
    margin-top: 30px;

    ul {
      li {
        font-size: 16px;
        margin-bottom: 10px;

        span {
          font-size: 14px;
        }
      }
    }
  }
  .portfolio-details-content {
    h3 {
      font-size: 18px;
    }
  }

  .woocommerce-topbar {
    text-align: center;

    .woocommerce-result-count {
      margin-bottom: 15px;
    }
  }
  .single-product {
    .product-content {
      padding: 20px 15px;
      text-align: center;

      h3 {
        font-size: 18px;
      }
    }
  }

  .shop-details {
    padding: 15px;

    .product-entry-summary {
      h3 {
        font-size: 18px;
        margin-top: 25px;
      }
      h4 {
        font-size: 16px;
        margin: 18px 0;
      }
      form {
        .form-control {
          width: 100px;
        }
      }
    }
    .shop-details-tabs {
      #tabs {
        li {
          display: block;
          text-align: center;
        }
      }
      .content {
        h3 {
          font-size: 18px;
        }
      }
    }
  }
  .product-img-slides.owl-theme .owl-nav [class*="owl-"] {
    line-height: 30px;
  }
  .shop-details-area {
    padding-bottom: 30px;
  }
  .shop-related-prodcut {
    .section-title {
      margin-bottom: 20px;

      h2 {
        font-size: 22px;
      }
    }
  }

  .cart-buttons {
    margin-top: 35px;

    .coupon-box {
      position: relative;

      button {
        position: relative;
        border-radius: 5px;
        display: block;
        width: 100%;
        padding: 13px 0;
        margin-top: 8px;
      }
    }
    .btn {
      margin-top: 25px;
    }
  }
  .cart-totals {
    margin-top: 35px;
    padding: 25px;

    h3 {
      font-size: 18px;
    }
  }

  .user-actions {
    padding: 15px 18px 13px;
    margin-bottom: 30px;

    i {
      display: block;
      margin: {
        bottom: 5px;
        right: 0;
      }
    }
  }
  .checkout-area {
    .title {
      font-size: 18px;
    }
  }
  .billing-details {
    padding: 18px;
  }
  .order-details {
    padding: 18px;
    margin-top: 30px;
  }

  .contact-info-area {
    padding-bottom: 30px;

    .contact-info-box {
      margin-bottom: 30px;
      padding: 20px 15px;

      .icon {
        width: 70px;
        height: 70px;
        line-height: 70px;
        font-size: 25px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  #contactForm {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;

    &.ml-4 {
      margin-left: 0 !important;
    }
    ul {
      &.social-links {
        li {
          a {
            width: 35px;
            height: 35px;
            line-height: 36px;
            font-size: 15px;
          }
        }
      }
      &.list {
        li {
          a {
            font-size: 14px;
          }
        }
      }
      &.footer-recent-post {
        li {
          a {
            font-size: 14px;
          }
          span {
            font-size: 13px;
          }
        }
      }
      &.footer-contact-info {
        li {
          font-size: 14px;
        }
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }
  .copyright-area {
    margin-top: 30px;
    text-align: center;
    padding: {
      top: 25px;
      bottom: 25px;
    }
    p {
      font-size: 13px;
    }
    .text-right {
      text-align: center !important;
      margin-top: 10px;
    }
  }
  .go-top {
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    line-height: 35px;
  }
  .searchBoxTop {
    .seachBoxContainer {
      padding: 50px 0 25px !important;
    }
  }
  .searchBoxTop .searchClose {
    top: 0 !important;
    right: 15px !important;
  }
  .searchBoxTop .searchClose::before,
  .searchBoxTop .searchClose::after {
    height: 30px !important;
    top: 10px;
  }
  .navbar-brand {
    img {
      // max-width: 80px;
      max-width: 20vh;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 25px;
        }
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.7;
    }
  }
  .ptb-80 {
    padding: {
      top: 50px;
      bottom: 50px;
    }
  }
}

// smaller laptop screen
@media screen and (min-width: $value_lg_offset) and (max-width: $value_xl) and (orientation: landscape) {
  // @media only #{$media} and ($feature_min : $value_sm) and ($feature_max : $value_md) {
  .parallax_banner {
    h1 {
      font-size: min(max(5vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 30px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 22px) !important; /* adjust as necessary */
    }

    display: flex;
    align-items: center;

    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      // width: 25%; /* adjust this as needed */
      width: 48vw; /* adjust this as needed */

      margin-right: 10% !important;
      margin-top: -5%;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60vw;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .pt-120 {
    padding-top: 80px;
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 30px;
        }
      }
    }
  }
  .ptb-120 {
    padding: {
      top: 80px;
      bottom: 80px;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 20px;
        margin-bottom: 8px;
      }
    }
  }
  .section-title {
    h2 {
      font-size: 30px;
    }
    span {
      margin-bottom: 10px;
    }
  }
  .single-services {
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  .why-choose-inner-area {
    .single-box {
      h3 {
        font-size: 20px;
      }
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav .nav-item a {
        margin-left: 9px;
        margin-right: 9px;
      }
      .others-option {
        margin-left: 0;

        ul {
          li {
            &:last-child,
            &:first-child {
              display: none;
            }
          }
        }
      }
    }
  }

  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 60px;
      text-align: center;
    }
  }
  .hero-content {
    h1 {
      font-size: 35px;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 430px;
      left: 0;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  .circle-shape3 {
    bottom: 20%;
    right: 13%;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 70px;
  }
  .cta-about-content {
    .section-title {
      h2 {
        font-size: 25px;
        br {
          display: none;
        }
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }
  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape1,
  .circle-shape2,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .shape6,
  .shape7 {
    display: none;
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }
  .circle-dot {
    display: none;
  }

  .why-choose-us-img {
    margin-bottom: 85px;
    text-align: center;

    .back-img {
      left: 15px;
      top: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  .why-choose-inner-area {
    .section-title {
      margin-bottom: 20px;
    }
    .single-box {
      margin-top: 30px;
    }
  }

  .cta-about-content {
    max-width: unset;
    margin-left: 0;
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
    }
  }

  .how-we-work {
    padding-bottom: 50px;
  }
  .single-work-box {
    margin-bottom: 30px;
  }

  .team-area {
    padding-bottom: 50px;
  }

  .skill-area {
    padding: {
      top: 80px;
    }
  }
  .skill-image {
    text-align: center;
    margin-top: 40px;

    .back-image {
      right: -30px;
      top: 10%;
      left: 0;
      margin: 0 auto;
    }
  }

  .features-boxes-area {
    padding-bottom: 50px;

    .single-box {
      margin-bottom: 30px;
    }
  }

  .about-image {
    text-align: center;
    margin-top: 30px;

    &::before {
      display: none;
    }
  }

  .my-skill-area {
    .shape6,
    .shape7 {
      display: none;
    }
  }

  .about-us-image {
    margin-top: 30px;
  }

  .skill-content {
    padding-left: 0 !important;
    margin-top: 30px;
  }

  .blog-area {
    padding-bottom: 50px;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 80px;
      bottom: 50px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        color: $template-color;
      }
      h3 {
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-image {
    margin-top: 35px;
  }

  .grid {
    .item {
      width: 50%;
    }
  }

  .page-title-area {
    padding: {
      top: 165px;
      bottom: 115px;
    }
    h1 {
      font-size: 35px;
      margin-bottom: 15px;
    }
  }

  .team-details-info {
    .personal-information {
      display: none;
    }
  }

  .services-area {
    padding-bottom: 50px;
  }

  .login-form {
    margin-top: 35px;
  }

  .signup-form {
    margin-bottom: 35px;
  }

  .faq-accordion,
  .faq-contact {
    padding: 30px;
  }

  .contact-info-area {
    padding-bottom: 50px;
  }
  .contact-info-box {
    margin-bottom: 30px;
  }
  #contactForm {
    margin-top: 35px;
  }

  .shop-details-area {
    padding-bottom: 50px;
  }
  .product-entry-summary {
    margin-top: 35px;
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }
  }

  .project-info {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;
  }
  .copyright-area {
    margin-top: 50px;
  }
  .funfact {
    h3 {
      font-size: 40px;
    }
  }
  .single-footer-widget {
    h3 {
      margin-bottom: 30px;
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav {
        .nav-item {
          .dropdown_menu {
            width: 210px;
          }
        }
      }
    }
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.8;
    }
  }
  .banner-social-buttons {
    display: none;
  }
  .navbar-brand {
    img {
      max-width: 90px;
    }
  }
  .single-blog-box {
    .blog-post-content {
      h3 {
        font-size: 22px;
      }
    }
  }
  .ptb-80 {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

// large screens
@media screen and (min-width: $value_xl_offset) and (max-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;

    position: relative;
    z-index: 1;
    height: 100%;
    // overflow: hidden;
    pointer-events: auto;
    align-items: center;

    .imgHolder {
      position: relative;
      // width: 40%; /* adjust this as needed */
      width: 35vw; /* adjust this as needed */

      margin-left: 55% !important;
      // margin-top: 0%;
    }

    img {
      position: relative;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: min(max(8vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }
  }



  nav {
    .navbar-nav {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: $white-color;

      .nav-item {
        padding: 9px 5% !important;

        a {
          margin-left: 0;
          margin-right: 0;
        }
        .dropdown_menu {
          left: 0;

          li {
            .dropdown_menu {
              top: 0;
              left: -5px;
              position: relative;
              display: none;
              margin-top: 0;
              border: 1px solid #eeeeee;
              padding: 0 0 0 4px;
            }
            &:focus,
            &:hover {
              .dropdown_menu {
                display: block;
                top: 0 !important;
              }
            }
          }
        }
        &:hover ul {
          top: 40px;
        }
      }
    }
    .others-option {
      background-color: $white-color;
      padding-bottom: 10px;
      margin-left: 0;
      padding-left: 15px;

      ul li .side-menu {
        display: none;
      }
    }
  }
  
  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 70vw;
  }

  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape2,
  .circle-shape3,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape6,
  .shape7,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .circle-dot {
    display: none;
  }
  .main-banner {
    height: 100vh;
  }
  .ptb-120 {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .banner-image {
    text-align: center;
    img {
      max-width: 420px;
      left: 0;
      width: 100%;
    }
  }
  .hero-content h1 {
    font-size: 38px;
  }
  .circle-shape1 {
    right: 9%;
  }
  .pt-120 {
    padding-top: 90px;
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .why-choose-us-img {
    margin-bottom: 0;

    .front-img {
      top: 0;
      left: 0;
    }
    .back-img {
      display: none;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .section-title {
    span {
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 40px;
        }
      }
    }
  }
  .boxes-area {
    &::before,
    &::after {
      width: 35%;
    }
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }

  .grid {
    .item {
      width: 33.3333%;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 7%;
    }
    .banner-image {
      img {
        top: 79px;
        left: 0;
      }
    }
  }

  .banner-social-buttons {
    display: none;
  }

  .about-image {
    &::before {
      right: -20px;
      top: 30px;
      width: 92%;
      height: 91%;
    }
  }

  .crafting-content {
    .single-item {
      &.item-one {
        right: 0;
      }
      &.item-two {
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
      }
      &.item-four {
        right: 0;
      }
    }
  }

  .why-choose-us-content {
    .section-title {
      margin-bottom: 10px;
      h2 {
        font-size: 25px;
      }
    }
    p {
      margin-bottom: 8px;
    }
    .btn {
      margin-top: 10px;
    }
  }
  .skill-image {
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .blog-area {
    padding-bottom: 60px !important;
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .navbar-brand {
    img {
      max-width: 200px;
    }
  }
  .copyright-area {
    margin-top: 85px;
  }
}

// Obscure <2k screens
@media screen and (min-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;
    // justify-content: center;
    align-items: center;

    .imgHolder {
      position: relative;
      top: 5%;
      width: 30vw; /* adjust this as needed */

      margin-top: 1%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: 8vw;
      font-size: min(max(8vw, 24px), 72px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: 4vw;
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: 2vw;
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
    }
  }



  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 5%;
    max-width: 80%;
  }
  .shape6 {
    left: 8%;
  }
  .circle-shape1 {
    right: 26%;
    bottom: 30%;
  }
  .circle-shape2 {
    right: 15%;
    bottom: 0;
  }
  .circle-shape3 {
    right: 27%;
    bottom: 0;
  }
  .shape10 {
    right: 8%;
  }
  .shape18 {
    left: 25%;
  }
  .shape19 {
    left: 20%;
  }
  .shape20 {
    right: 20%;
  }
  .shape21 {
    top: 20%;
    right: 25%;
  }
  .shape22 {
    right: 18%;
    top: 25%;
  }
  .shape13 {
    left: 10%;
    top: 45%;
  }
  .footer-area {
    .shape18 {
      top: 30%;
      left: 10%;
    }
    .shape21 {
      top: 20%;
      right: 15%;
    }
    .shape7 {
      right: 7%;
      top: 34%;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      height: 100%;
      padding: {
        top: 290px;
        bottom: 225px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 24%;
      bottom: 20%;
    }
    .circle-shape2 {
      left: 18%;
      right: auto;
    }
    .circle-shape3 {
      right: auto;
      left: 22%;
    }
    .banner-image {
      img {
        top: 81px;
      }
    }
  }
  .shape24 {
    display: block;
  }
  .boxes-area {
    &::before,
    &::after {
      width: 40%;
    }
  }
  .why-choose-us-content {
    .section-title {
      h2 {
        font-size: 22px;
      }
    }
  }
}
--------------------------------------------------
$media: screen;
$feature_min: min-width;
$feature_max: max-width;

// Extra small devices (portrait phones, less than 576px)
$value_xs: 575px;

// Small devices (landscape phones, 576px and up)
$value_sm: 576px;

// Medium devices (tablets, 768px and up)
$value_md: 767px;
$value_md_offset: 768px;

// Large devices (desktops, 992px and up)
$value_lg: 992px;
$value_lg_offset: 993px;

// Extra large devices (large desktops, 1200px and up)
$value_xl: 1200px;
$value_xl_offset: 1201px;

// Extra extra large devices (TVs, large screens, 1600px and up)
$value_xx: 1600px;

$template-color: #38d16a;
$pink-color: #f54ea2;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;

// Only For Mobile and Tab Navbar
@media only #{$media} and ($feature_max : $value_md) {
  .searchBoxTop {
    .seachBoxContainer {
      padding: 25px 0 55px;
    }
    .searchClose {
      cursor: pointer;
      position: absolute;
      top: auto;
      right: 11px;
      width: 40px;
      height: 40px;
      margin-top: 0;
      bottom: 11px;
    }
  }
}

@media screen and (max-width: $value_md_offset) and (orientation: portrait) {
  .contact-card {
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  .card.image,
  .card.info {
    flex: 1;
  }

  .card.image {
    order: 2;
  }

  .card.info {
    order: 1;
  }

  // @media screen and (max-width: $value_md) and (orientation: portrait) {
  //   .contact-card {
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-between;
  //     align-items: center;
  //     // padding: 1em;
  //     border: 4px solid #000;
  //     width: 600px;
  //     height: 100%;
  //     // margin: 0 auto;
  //   }

  //   .card .image {
  //     flex: 2;
  //     justify-content: flex-end;

  //   }

  //   .card .info {
  //     flex: 1;
  //     justify-content: flex-start;

  //   }

  //   .card {
  //     flex-direction: column;
  //   }

  // @media only #{$media} and ($feature_max : $value_xs) {
  .parallax_banner {
    // img {
    //   display: none;
    // }
    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      width: 35%; /* adjust this as needed */
      // margin-left: 20% !important;
      margin-top: -5%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }
}

// ipad 
@media screen and (min-width: $value_md_offset) and (orientation: landscape){
  .parallax_banner {

    h1 {
      font-size: min(max(6vw, 24px), 42px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }

    overflow: visible;
    display: flex;
    align-items: center;

    .imgHolder {
      z-index: 1;
      position: relative;
      width: 38vw; /* adjust this as needed */
      margin-left: 54vw !important;
      // margin-top: -5%;
      // bottom: 0 !important;
      top:0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60%;
  }

  .ptb-120 {
    padding: {
      top: 60px;
      bottom: 60px;
    }
  }
  .owl-carousel {
    &.owl-theme {
      .owl-dots {
        right: 15px;
        top: auto;
        bottom: 10px;

        .owl-dot {
          display: inline-block;

          span {
            margin: 0 3px;
            width: 15px;
            height: 15px;
          }
        }
      }
      .owl-nav {
        [class*="owl-"] {
          font-size: 16px;
          margin: -20px 0 0;
          left: 0;
          width: 35px;
          height: 35px;
          line-height: 38px;

          &.owl-next {
            right: 0;
            left: auto;
          }
        }
      }
    }
  }
  .btn {
    font-size: 14px;
    padding: 12px 25px;
  }
  p {
    font-size: 14px;
  }
  .preloader {
    .loader {
      h1 {
        font-size: 3rem;
      }
    }
  }
  .section-title {
    margin-bottom: 40px;

    span {
      font-size: 14px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 24px;
      max-width: 100%;
    }
  }
  .artflex-nav {
    padding-top: 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .navbar {
      padding: {
        left: 0;
        right: 0;
      }
    }
    .navbar-light {
      .navbar-toggler {
        border-color: rgba(0, 0, 0, 1);
        outline: 0;
        border-radius: 0;
      }
    }
    nav {
      .navbar-nav {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: $white-color;

        .nav-item {
          padding: 9px 2%;

          a {
            margin-left: 0;
            margin-right: 0;
          }
          .dropdown_menu {
            left: 0;

            li {
              .dropdown_menu {
                top: 0;
                left: -5px;
                position: relative;
                display: none;
                margin-top: 0;
                border: 1px solid #eeeeee;
                padding: 0 0 0 4px;
              }
              &:focus,
              &:hover {
                .dropdown_menu {
                  display: block;
                  top: 0 !important;
                }
              }
            }
          }
          &:hover ul {
            top: 40px;
          }
        }
      }
      .others-option {
        background-color: $white-color;
        padding-bottom: 10px;
        margin-left: 0;
        padding-left: 15px;

        ul li .side-menu {
          display: none;
        }
      }
    }
  }
  .shop-details .product-entry-summary form .input-counter {
    max-width: 120px;
    min-width: 120px;
  }
  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 30px;
    }
  }
  .banner-social-buttons {
    display: none;
  }

  .hero-header {
    // font-size: 25px !important;
  }
  .hero-content {
    h1 {
      // font-size: 27px;
    }
    h3 {
      // font-size: 25px !important;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
    margin-top: 0;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 330px;
      left: 0;
      margin: auto;
      width: 100%;
    }
  }
  .skill-image {
    text-align: center;
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  // .shape1,
  // .shape2,
  // .shape7,
  // .shape8,
  // .shape5,
  // .shape6,
  // .shape10,
  // .shape4,
  // .shape3,
  // .circle-shape1,
  // .circle-shape2,
  // .shape11,
  // .shape12,
  // .shape9,
  // .shape14,
  // .shape15,
  // .shape13,
  // .shape18,
  // .shape19,
  // .shape20,
  // .shape21,
  // .shape22,
  // .shape23,
  // .shape24,
  // .shape25,
  // .shape26,
  // .circle-dot {
  //   display: none;
  // }
  .circle-shape3 {
    right: 6%;
    bottom: 5%;
  }
  .circle-top {
    top: -440px;
    left: -350px;
  }
  .circle-bottom {
    bottom: -440px;
    right: -350px;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
        h1 {
          margin-bottom: 25px;
        }
      }
    }
  }
  .agency-portfolio-home {
    .main-banner {
      padding: {
        top: 145px;
        bottom: 90px;
      }

      .hero-content {
        h1 {
          font-size: 35px;
        }
      }
    }
  }
  .blog-home-slides {
    .col-lg-12 {
      padding: 0;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;

      div {
        &.tags {
          a {
            padding: 5px 15px;
            font-size: 14px;
          }
        }
      }
      h3 {
        margin: 15px 0 10px;
        font-size: 18px;
        line-height: 27px;
      }
      ul {
        li {
          margin-right: 2px;
          font-size: 12px;

          i {
            margin-right: 2px;
          }
        }
      }
    }
  }
  .blog-home-slides {
    &:hover {
      &.owl-carousel {
        &.owl-theme {
          .owl-nav {
            [class*="owl-"] {
              left: 5px;

              &.owl-next {
                right: 5px;
                left: auto;
              }
            }
          }
        }
      }
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }

  .cta-about {
    padding: {
      top: 60px;
      bottom: 60px;
      left: 10px;
      right: 5px;
    }
    .container-fluid {
      padding: {
        left: 15px !important;
        right: 15px !important;
      }
    }
  }
  .cta-about-image {
    background-image: unset;

    img {
      display: block;
    }
  }
  .cta-about-content {
    max-width: 100%;
    margin: {
      top: 35px;
    }
    padding: 0;
    h2 {
      br {
        display: none;
      }
    }
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;
      padding: 25px 8px;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
      i {
        font-size: 30px;
      }
      h6 {
        font-size: 15px;
      }
    }
  }
  .crafting-image {
    .video-btn {
      font-size: 20px;
      margin-top: -30px;
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }

  .services-area {
    padding-bottom: 30px;
  }
  .single-services {
    padding: 20px;

    h3 {
      font-size: 18px;
    }
  }
  .more-services-btn {
    margin-top: 15px;
  }
  .single-services-box {
    padding: 15px;

    .icon {
      font-size: 40px;
    }
    h3 {
      font-size: 18px;
    }
  }
  .services-box {
    .services-content {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .services-area {
    .single-services {
      padding: 15px;
    }
  }
  .services-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-dots {
          margin-top: 10px !important;

          button {
            &.owl-dot {
              span {
                margin: 0 3px;
                width: 14px;
                height: 14px;
              }
            }
          }
        }
      }
    }
  }

  .why-choose-us-img {
    margin-bottom: 30px;

    .front-img {
      top: 0;
      left: 0;
      width: 100%;
    }
    .back-img {
      display: none;
    }
  }
  .why-choose-us-area {
    &:hover {
      .why-choose-us-img {
        .front-img {
          top: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 45px;

    .section-title {
      margin-bottom: 10px;

      h2 {
        max-width: 100%;
      }
    }
    .single-box {
      padding: 20px;
      margin-top: 30px;

      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }

  .how-we-work {
    padding-bottom: 30px;
  }
  .single-work-box {
    margin-bottom: 30px;
    padding: 20px 15px;
    text-align: center;

    .number {
      display: inline-block;
    }
    h3 {
      font-size: 18px;
    }
  }

  .team-member-image {
    text-align: center;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 60px;
      bottom: 30px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        font-size: 40px;
        color: $template-color;
      }
      h3 {
        font-size: 18px;
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-boxes-area {
    padding-bottom: 30px;

    .single-box {
      margin-bottom: 30px;
      padding-left: 55px;

      span {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }

  .about-image {
    margin-top: 30px;
    text-align: center;

    &::before {
      display: none;
    }
    img {
      width: auto;
    }
  }

  .single-work {
    .works-content {
      h3 {
        font-size: 18px;
        margin-bottom: 0;
      }
      p {
        display: none;
      }
    }
    &:hover {
      .works-content {
        margin-top: -25px;
      }
    }
  }

  .portfolio-item {
    img {
      width: 100%;
    }
    .portfolio-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .single-feedback {
    padding-left: 0;
    max-width: 100%;
    margin-bottom: 40px;

    img {
      position: relative;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 18px;

      span {
        font-size: 14px;
      }
    }
  }
  .feedback-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          left: 0;
          bottom: -5px;
          right: 0;
        }
      }
    }
  }

  .skill-content {
    padding-left: 0 !important;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }

  .team-area {
    padding-bottom: 30px;
  }
  .single-team {
    .team-content {
      margin-top: 30px;

      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  .single-team-box {
    .team-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .cta-content {
    span {
      font-size: 13px;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 25px;
    }
  }

  .skill-area {
    padding: {
      top: 60px;
    }
  }
  .our-skill {
    margin-bottom: 30px;

    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }
  .skill-image {
    .back-image {
      right: 0;
    }
  }

  .funfacts-area {
    padding-bottom: 40px;
  }
  .funfact {
    margin-bottom: 20px;

    h3 {
      font-size: 30px;
    }
    p {
      font-size: 13px;
      text-transform: capitalize;
      margin-top: 3px;
    }
  }

  .blog-area {
    padding-bottom: 30px;
  }
  .single-blog-post {
    .blog-post-content {
      padding: 15px;

      .date {
        font-size: 13px;
      }
      h3 {
        line-height: 28px;
        font-size: 18px;
      }
    }
    .read-more-btn {
      font-size: 14px;
    }
    &.with-video {
      .blog-video {
        iframe {
          height: 160px;
        }
      }
    }
  }

  .contact-cta-content {
    .section-title {
      margin-bottom: 15px;
    }
    p {
      max-width: 100%;
      margin: 0 auto 25px;
    }
  }

  .features-content {
    .single-features-item {
      padding-left: 45px;

      .icon {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .features-image {
    margin-top: 30px;
  }

  .page-title-area {
    padding: {
      top: 160px;
      bottom: 85px;
    }
    h1 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 14px;
      }
    }
  }
  .pt-120 {
    padding-top: 50px;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .about-us-content {
    p {
      margin-top: 13px;
    }

    .single-about-box {
      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  .about-us-image {
    margin-top: 30px;
  }

  .pagination-area {
    margin-top: 15px;
  }

  .team-details-info {
    margin-top: 30px;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .personal-information {
      display: none;
    }
  }
  .overview-desc {
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }

  .login-form {
    padding: 20px;
    margin-top: 30px;

    h3 {
      font-size: 18px;
    }
    .text-right {
      text-align: left !important;
    }
  }

  .signup-form {
    padding: 20px;
    margin-bottom: 30px;

    h3 {
      font-size: 18px;
    }
  }

  .coming-soon {
    // height: 100%;
    padding: {
      top: 70px;
      bottom: 70px;
    }
    .coming-soon-content {
      h2 {
        font-size: 1em;
        line-height: 45px;
      }
      p {
        margin-top: 10px;
      }
      #timer {
        div {
          font-size: 40px;
          width: 120px;
          height: 120px;
          padding-top: 27px;
          line-height: 39px;
          margin: 0 5px 15px;
        }
      }
      form {
        button {
          position: relative;
          right: 0;
          top: 0;
          width: 100%;
          border-radius: 30px;
          margin-top: 10px;
          padding: 13px 0;
        }
      }
    }
  }

  .error {
    h1 {
      font-size: 140px;
    }
    h2 {
      font-size: 18px;
      margin: 0 0 30px;
    }
  }

  .faq-accordion {
    padding: 15px;

    .accordion {
      .accordion__item {
        .accordion__button {
          padding: 15px 15px;
          font-size: 16px;
        }
      }
    }
  }
  .faq-contact {
    margin-top: 30px;
    padding: 40px 15px;
    border-radius: 5px;
    text-align: center;

    h3 {
      font-size: 18px;
    }
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }

    .widget {
      h3,
      .widget-title {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }

  .blog-details-area {
    .blog-details {
      .article-img {
        .date {
          bottom: 2px;
          width: 65px;
          left: 2px;
          height: 60px;
          font-size: 15px;
          padding-top: 8px;
          line-height: 22px;
        }
      }
      .article-content {
        padding: 20px 15px;

        ul.category {
          margin-bottom: 20px;

          li {
            a {
              padding: 3px 14px 1px;
              margin-bottom: 3px;
              font-size: 13px;
            }
          }
        }
        h3 {
          font-size: 18px;
          margin-bottom: -10px;
          line-height: 26px;
        }
        .blockquote {
          padding: 20px 15px;
          border-left: 3px solid $template_color;

          p {
            font-size: 15px;
          }
        }
      }
    }
    .post-controls-buttons {
      text-align: center;
      padding: 20px 15px;

      div {
        a {
          padding: 7px 18px;
          font-size: 14px;
        }
      }
    }
    .post-comments {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
      }
      .single-comment {
        padding-left: 0;

        .comment-img {
          position: relative;
        }
        .comment-content {
          margin-top: 20px;
        }
        &.left-m {
          margin-left: 30px;
        }
      }
    }
    .leave-a-reply {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .form-group {
        margin-bottom: 10px;
      }
    }
  }

  .project-info {
    margin-top: 30px;

    ul {
      li {
        font-size: 16px;
        margin-bottom: 10px;

        span {
          font-size: 14px;
        }
      }
    }
  }
  .portfolio-details-content {
    h3 {
      font-size: 18px;
    }
  }

  .woocommerce-topbar {
    text-align: center;

    .woocommerce-result-count {
      margin-bottom: 15px;
    }
  }
  .single-product {
    .product-content {
      padding: 20px 15px;
      text-align: center;

      h3 {
        font-size: 18px;
      }
    }
  }

  .shop-details {
    padding: 15px;

    .product-entry-summary {
      h3 {
        font-size: 18px;
        margin-top: 25px;
      }
      h4 {
        font-size: 16px;
        margin: 18px 0;
      }
      form {
        .form-control {
          width: 100px;
        }
      }
    }
    .shop-details-tabs {
      #tabs {
        li {
          display: block;
          text-align: center;
        }
      }
      .content {
        h3 {
          font-size: 18px;
        }
      }
    }
  }
  .product-img-slides.owl-theme .owl-nav [class*="owl-"] {
    line-height: 30px;
  }
  .shop-details-area {
    padding-bottom: 30px;
  }
  .shop-related-prodcut {
    .section-title {
      margin-bottom: 20px;

      h2 {
        font-size: 22px;
      }
    }
  }

  .cart-buttons {
    margin-top: 35px;

    .coupon-box {
      position: relative;

      button {
        position: relative;
        border-radius: 5px;
        display: block;
        width: 100%;
        padding: 13px 0;
        margin-top: 8px;
      }
    }
    .btn {
      margin-top: 25px;
    }
  }
  .cart-totals {
    margin-top: 35px;
    padding: 25px;

    h3 {
      font-size: 18px;
    }
  }

  .user-actions {
    padding: 15px 18px 13px;
    margin-bottom: 30px;

    i {
      display: block;
      margin: {
        bottom: 5px;
        right: 0;
      }
    }
  }
  .checkout-area {
    .title {
      font-size: 18px;
    }
  }
  .billing-details {
    padding: 18px;
  }
  .order-details {
    padding: 18px;
    margin-top: 30px;
  }

  .contact-info-area {
    padding-bottom: 30px;

    .contact-info-box {
      margin-bottom: 30px;
      padding: 20px 15px;

      .icon {
        width: 70px;
        height: 70px;
        line-height: 70px;
        font-size: 25px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  #contactForm {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;

    &.ml-4 {
      margin-left: 0 !important;
    }
    ul {
      &.social-links {
        li {
          a {
            width: 35px;
            height: 35px;
            line-height: 36px;
            font-size: 15px;
          }
        }
      }
      &.list {
        li {
          a {
            font-size: 14px;
          }
        }
      }
      &.footer-recent-post {
        li {
          a {
            font-size: 14px;
          }
          span {
            font-size: 13px;
          }
        }
      }
      &.footer-contact-info {
        li {
          font-size: 14px;
        }
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }
  .copyright-area {
    margin-top: 30px;
    text-align: center;
    padding: {
      top: 25px;
      bottom: 25px;
    }
    p {
      font-size: 13px;
    }
    .text-right {
      text-align: center !important;
      margin-top: 10px;
    }
  }
  .go-top {
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    line-height: 35px;
  }
  .searchBoxTop {
    .seachBoxContainer {
      padding: 50px 0 25px !important;
    }
  }
  .searchBoxTop .searchClose {
    top: 0 !important;
    right: 15px !important;
  }
  .searchBoxTop .searchClose::before,
  .searchBoxTop .searchClose::after {
    height: 30px !important;
    top: 10px;
  }
  .navbar-brand {
    img {
      // max-width: 80px;
      max-width: 20vh;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 25px;
        }
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.7;
    }
  }
  .ptb-80 {
    padding: {
      top: 50px;
      bottom: 50px;
    }
  }
}

// smaller laptop screen
@media screen and (min-width: $value_lg_offset) and (max-width: $value_xl) and (orientation: landscape) {
  // @media only #{$media} and ($feature_min : $value_sm) and ($feature_max : $value_md) {
  .parallax_banner {
    h1 {
      font-size: min(max(5vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 30px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 22px) !important; /* adjust as necessary */
    }

    display: flex;
    align-items: center;

    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      // width: 25%; /* adjust this as needed */
      width: 48vw; /* adjust this as needed */

      margin-right: 10% !important;
      margin-top: -5%;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60vw;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .pt-120 {
    padding-top: 80px;
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 30px;
        }
      }
    }
  }
  .ptb-120 {
    padding: {
      top: 80px;
      bottom: 80px;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 20px;
        margin-bottom: 8px;
      }
    }
  }
  .section-title {
    h2 {
      font-size: 30px;
    }
    span {
      margin-bottom: 10px;
    }
  }
  .single-services {
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  .why-choose-inner-area {
    .single-box {
      h3 {
        font-size: 20px;
      }
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav .nav-item a {
        margin-left: 9px;
        margin-right: 9px;
      }
      .others-option {
        margin-left: 0;

        ul {
          li {
            &:last-child,
            &:first-child {
              display: none;
            }
          }
        }
      }
    }
  }

  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 60px;
      text-align: center;
    }
  }
  .hero-content {
    h1 {
      font-size: 35px;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 430px;
      left: 0;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  .circle-shape3 {
    bottom: 20%;
    right: 13%;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 70px;
  }
  .cta-about-content {
    .section-title {
      h2 {
        font-size: 25px;
        br {
          display: none;
        }
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }
  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape1,
  .circle-shape2,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .shape6,
  .shape7 {
    display: none;
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }
  .circle-dot {
    display: none;
  }

  .why-choose-us-img {
    margin-bottom: 85px;
    text-align: center;

    .back-img {
      left: 15px;
      top: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  .why-choose-inner-area {
    .section-title {
      margin-bottom: 20px;
    }
    .single-box {
      margin-top: 30px;
    }
  }

  .cta-about-content {
    max-width: unset;
    margin-left: 0;
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
    }
  }

  .how-we-work {
    padding-bottom: 50px;
  }
  .single-work-box {
    margin-bottom: 30px;
  }

  .team-area {
    padding-bottom: 50px;
  }

  .skill-area {
    padding: {
      top: 80px;
    }
  }
  .skill-image {
    text-align: center;
    margin-top: 40px;

    .back-image {
      right: -30px;
      top: 10%;
      left: 0;
      margin: 0 auto;
    }
  }

  .features-boxes-area {
    padding-bottom: 50px;

    .single-box {
      margin-bottom: 30px;
    }
  }

  .about-image {
    text-align: center;
    margin-top: 30px;

    &::before {
      display: none;
    }
  }

  .my-skill-area {
    .shape6,
    .shape7 {
      display: none;
    }
  }

  .about-us-image {
    margin-top: 30px;
  }

  .skill-content {
    padding-left: 0 !important;
    margin-top: 30px;
  }

  .blog-area {
    padding-bottom: 50px;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 80px;
      bottom: 50px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        color: $template-color;
      }
      h3 {
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-image {
    margin-top: 35px;
  }

  .grid {
    .item {
      width: 50%;
    }
  }

  .page-title-area {
    padding: {
      top: 165px;
      bottom: 115px;
    }
    h1 {
      font-size: 35px;
      margin-bottom: 15px;
    }
  }

  .team-details-info {
    .personal-information {
      display: none;
    }
  }

  .services-area {
    padding-bottom: 50px;
  }

  .login-form {
    margin-top: 35px;
  }

  .signup-form {
    margin-bottom: 35px;
  }

  .faq-accordion,
  .faq-contact {
    padding: 30px;
  }

  .contact-info-area {
    padding-bottom: 50px;
  }
  .contact-info-box {
    margin-bottom: 30px;
  }
  #contactForm {
    margin-top: 35px;
  }

  .shop-details-area {
    padding-bottom: 50px;
  }
  .product-entry-summary {
    margin-top: 35px;
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }
  }

  .project-info {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;
  }
  .copyright-area {
    margin-top: 50px;
  }
  .funfact {
    h3 {
      font-size: 40px;
    }
  }
  .single-footer-widget {
    h3 {
      margin-bottom: 30px;
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav {
        .nav-item {
          .dropdown_menu {
            width: 210px;
          }
        }
      }
    }
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.8;
    }
  }
  .banner-social-buttons {
    display: none;
  }
  .navbar-brand {
    img {
      max-width: 90px;
    }
  }
  .single-blog-box {
    .blog-post-content {
      h3 {
        font-size: 22px;
      }
    }
  }
  .ptb-80 {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

// large screens
@media screen and (min-width: $value_xl_offset) and (max-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;

    position: relative;
    z-index: 1;
    height: 100%;
    // overflow: hidden;
    pointer-events: auto;
    align-items: center;

    .imgHolder {
      position: relative;
      // width: 40%; /* adjust this as needed */
      width: 35vw; /* adjust this as needed */

      margin-left: 55% !important;
      // margin-top: 0%;
    }

    img {
      position: relative;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: min(max(8vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }
  }



  nav {
    .navbar-nav {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: $white-color;

      .nav-item {
        padding: 9px 5% !important;

        a {
          margin-left: 0;
          margin-right: 0;
        }
        .dropdown_menu {
          left: 0;

          li {
            .dropdown_menu {
              top: 0;
              left: -5px;
              position: relative;
              display: none;
              margin-top: 0;
              border: 1px solid #eeeeee;
              padding: 0 0 0 4px;
            }
            &:focus,
            &:hover {
              .dropdown_menu {
                display: block;
                top: 0 !important;
              }
            }
          }
        }
        &:hover ul {
          top: 40px;
        }
      }
    }
    .others-option {
      background-color: $white-color;
      padding-bottom: 10px;
      margin-left: 0;
      padding-left: 15px;

      ul li .side-menu {
        display: none;
      }
    }
  }
  
  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 70vw;
  }

  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape2,
  .circle-shape3,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape6,
  .shape7,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .circle-dot {
    display: none;
  }
  .main-banner {
    height: 100vh;
  }
  .ptb-120 {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .banner-image {
    text-align: center;
    img {
      max-width: 420px;
      left: 0;
      width: 100%;
    }
  }
  .hero-content h1 {
    font-size: 38px;
  }
  .circle-shape1 {
    right: 9%;
  }
  .pt-120 {
    padding-top: 90px;
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .why-choose-us-img {
    margin-bottom: 0;

    .front-img {
      top: 0;
      left: 0;
    }
    .back-img {
      display: none;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .section-title {
    span {
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 40px;
        }
      }
    }
  }
  .boxes-area {
    &::before,
    &::after {
      width: 35%;
    }
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }

  .grid {
    .item {
      width: 33.3333%;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 7%;
    }
    .banner-image {
      img {
        top: 79px;
        left: 0;
      }
    }
  }

  .banner-social-buttons {
    display: none;
  }

  .about-image {
    &::before {
      right: -20px;
      top: 30px;
      width: 92%;
      height: 91%;
    }
  }

  .crafting-content {
    .single-item {
      &.item-one {
        right: 0;
      }
      &.item-two {
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
      }
      &.item-four {
        right: 0;
      }
    }
  }

  .why-choose-us-content {
    .section-title {
      margin-bottom: 10px;
      h2 {
        font-size: 25px;
      }
    }
    p {
      margin-bottom: 8px;
    }
    .btn {
      margin-top: 10px;
    }
  }
  .skill-image {
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .blog-area {
    padding-bottom: 60px !important;
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .navbar-brand {
    img {
      max-width: 200px;
    }
  }
  .copyright-area {
    margin-top: 85px;
  }
}

// Obscure <2k screens
@media screen and (min-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;
    // justify-content: center;
    align-items: center;

    .imgHolder {
      position: relative;
      top: 5%;
      width: 30vw; /* adjust this as needed */

      margin-top: 1%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: 8vw;
      font-size: min(max(8vw, 24px), 72px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: 4vw;
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: 2vw;
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
    }
  }



  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 5%;
    max-width: 80%;
  }
  .shape6 {
    left: 8%;
  }
  .circle-shape1 {
    right: 26%;
    bottom: 30%;
  }
  .circle-shape2 {
    right: 15%;
    bottom: 0;
  }
  .circle-shape3 {
    right: 27%;
    bottom: 0;
  }
  .shape10 {
    right: 8%;
  }
  .shape18 {
    left: 25%;
  }
  .shape19 {
    left: 20%;
  }
  .shape20 {
    right: 20%;
  }
  .shape21 {
    top: 20%;
    right: 25%;
  }
  .shape22 {
    right: 18%;
    top: 25%;
  }
  .shape13 {
    left: 10%;
    top: 45%;
  }
  .footer-area {
    .shape18 {
      top: 30%;
      left: 10%;
    }
    .shape21 {
      top: 20%;
      right: 15%;
    }
    .shape7 {
      right: 7%;
      top: 34%;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      height: 100%;
      padding: {
        top: 290px;
        bottom: 225px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 24%;
      bottom: 20%;
    }
    .circle-shape2 {
      left: 18%;
      right: auto;
    }
    .circle-shape3 {
      right: auto;
      left: 22%;
    }
    .banner-image {
      img {
        top: 81px;
      }
    }
  }
  .shape24 {
    display: block;
  }
  .boxes-area {
    &::before,
    &::after {
      width: 40%;
    }
  }
  .why-choose-us-content {
    .section-title {
      h2 {
        font-size: 22px;
      }
    }
  }
}
--------------------------------------------------
$media: screen;
$feature_min: min-width;
$feature_max: max-width;

// Extra small devices (portrait phones, less than 576px)
$value_xs: 575px;

// Small devices (landscape phones, 576px and up)
$value_sm: 576px;

// Medium devices (tablets, 768px and up)
$value_md: 767px;
$value_md_offset: 768px;

// Large devices (desktops, 992px and up)
$value_lg: 992px;
$value_lg_offset: 993px;

// Extra large devices (large desktops, 1200px and up)
$value_xl: 1200px;
$value_xl_offset: 1201px;

// Extra extra large devices (TVs, large screens, 1600px and up)
$value_xx: 1600px;

$template-color: #38d16a;
$pink-color: #f54ea2;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;

// Only For Mobile and Tab Navbar
@media only #{$media} and ($feature_max : $value_md) {
  .searchBoxTop {
    .seachBoxContainer {
      padding: 25px 0 55px;
    }
    .searchClose {
      cursor: pointer;
      position: absolute;
      top: auto;
      right: 11px;
      width: 40px;
      height: 40px;
      margin-top: 0;
      bottom: 11px;
    }
  }
}

@media screen and (max-width: $value_md_offset) and (orientation: portrait) {
  .contact-card {
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  .card.image,
  .card.info {
    flex: 1;
  }

  .card.image {
    order: 2;
  }

  .card.info {
    order: 1;
  }

  // @media screen and (max-width: $value_md) and (orientation: portrait) {
  //   .contact-card {
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-between;
  //     align-items: center;
  //     // padding: 1em;
  //     border: 4px solid #000;
  //     width: 600px;
  //     height: 100%;
  //     // margin: 0 auto;
  //   }

  //   .card .image {
  //     flex: 2;
  //     justify-content: flex-end;

  //   }

  //   .card .info {
  //     flex: 1;
  //     justify-content: flex-start;

  //   }

  //   .card {
  //     flex-direction: column;
  //   }

  // @media only #{$media} and ($feature_max : $value_xs) {
  .parallax_banner {
    // img {
    //   display: none;
    // }
    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      width: 35%; /* adjust this as needed */
      // margin-left: 20% !important;
      margin-top: -5%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }
}

// ipad 
@media screen and (min-width: $value_md_offset) and (orientation: landscape){
  .parallax_banner {

    h1 {
      font-size: min(max(6vw, 24px), 42px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }

    overflow: visible;
    display: flex;
    align-items: center;

    .imgHolder {
      z-index: 1;
      position: relative;
      width: 38vw; /* adjust this as needed */
      margin-left: 54vw !important;
      // margin-top: -5%;
      // bottom: 0 !important;
      top:0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60%;
  }

  .ptb-120 {
    padding: {
      top: 60px;
      bottom: 60px;
    }
  }
  .owl-carousel {
    &.owl-theme {
      .owl-dots {
        right: 15px;
        top: auto;
        bottom: 10px;

        .owl-dot {
          display: inline-block;

          span {
            margin: 0 3px;
            width: 15px;
            height: 15px;
          }
        }
      }
      .owl-nav {
        [class*="owl-"] {
          font-size: 16px;
          margin: -20px 0 0;
          left: 0;
          width: 35px;
          height: 35px;
          line-height: 38px;

          &.owl-next {
            right: 0;
            left: auto;
          }
        }
      }
    }
  }
  .btn {
    font-size: 14px;
    padding: 12px 25px;
  }
  p {
    font-size: 14px;
  }
  .preloader {
    .loader {
      h1 {
        font-size: 3rem;
      }
    }
  }
  .section-title {
    margin-bottom: 40px;

    span {
      font-size: 14px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 24px;
      max-width: 100%;
    }
  }
  .artflex-nav {
    padding-top: 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .navbar {
      padding: {
        left: 0;
        right: 0;
      }
    }
    .navbar-light {
      .navbar-toggler {
        border-color: rgba(0, 0, 0, 1);
        outline: 0;
        border-radius: 0;
      }
    }
    nav {
      .navbar-nav {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: $white-color;

        .nav-item {
          padding: 9px 2%;

          a {
            margin-left: 0;
            margin-right: 0;
          }
          .dropdown_menu {
            left: 0;

            li {
              .dropdown_menu {
                top: 0;
                left: -5px;
                position: relative;
                display: none;
                margin-top: 0;
                border: 1px solid #eeeeee;
                padding: 0 0 0 4px;
              }
              &:focus,
              &:hover {
                .dropdown_menu {
                  display: block;
                  top: 0 !important;
                }
              }
            }
          }
          &:hover ul {
            top: 40px;
          }
        }
      }
      .others-option {
        background-color: $white-color;
        padding-bottom: 10px;
        margin-left: 0;
        padding-left: 15px;

        ul li .side-menu {
          display: none;
        }
      }
    }
  }
  .shop-details .product-entry-summary form .input-counter {
    max-width: 120px;
    min-width: 120px;
  }
  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 30px;
    }
  }
  .banner-social-buttons {
    display: none;
  }

  .hero-header {
    // font-size: 25px !important;
  }
  .hero-content {
    h1 {
      // font-size: 27px;
    }
    h3 {
      // font-size: 25px !important;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
    margin-top: 0;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 330px;
      left: 0;
      margin: auto;
      width: 100%;
    }
  }
  .skill-image {
    text-align: center;
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  // .shape1,
  // .shape2,
  // .shape7,
  // .shape8,
  // .shape5,
  // .shape6,
  // .shape10,
  // .shape4,
  // .shape3,
  // .circle-shape1,
  // .circle-shape2,
  // .shape11,
  // .shape12,
  // .shape9,
  // .shape14,
  // .shape15,
  // .shape13,
  // .shape18,
  // .shape19,
  // .shape20,
  // .shape21,
  // .shape22,
  // .shape23,
  // .shape24,
  // .shape25,
  // .shape26,
  // .circle-dot {
  //   display: none;
  // }
  .circle-shape3 {
    right: 6%;
    bottom: 5%;
  }
  .circle-top {
    top: -440px;
    left: -350px;
  }
  .circle-bottom {
    bottom: -440px;
    right: -350px;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
        h1 {
          margin-bottom: 25px;
        }
      }
    }
  }
  .agency-portfolio-home {
    .main-banner {
      padding: {
        top: 145px;
        bottom: 90px;
      }

      .hero-content {
        h1 {
          font-size: 35px;
        }
      }
    }
  }
  .blog-home-slides {
    .col-lg-12 {
      padding: 0;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;

      div {
        &.tags {
          a {
            padding: 5px 15px;
            font-size: 14px;
          }
        }
      }
      h3 {
        margin: 15px 0 10px;
        font-size: 18px;
        line-height: 27px;
      }
      ul {
        li {
          margin-right: 2px;
          font-size: 12px;

          i {
            margin-right: 2px;
          }
        }
      }
    }
  }
  .blog-home-slides {
    &:hover {
      &.owl-carousel {
        &.owl-theme {
          .owl-nav {
            [class*="owl-"] {
              left: 5px;

              &.owl-next {
                right: 5px;
                left: auto;
              }
            }
          }
        }
      }
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }

  .cta-about {
    padding: {
      top: 60px;
      bottom: 60px;
      left: 10px;
      right: 5px;
    }
    .container-fluid {
      padding: {
        left: 15px !important;
        right: 15px !important;
      }
    }
  }
  .cta-about-image {
    background-image: unset;

    img {
      display: block;
    }
  }
  .cta-about-content {
    max-width: 100%;
    margin: {
      top: 35px;
    }
    padding: 0;
    h2 {
      br {
        display: none;
      }
    }
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;
      padding: 25px 8px;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
      i {
        font-size: 30px;
      }
      h6 {
        font-size: 15px;
      }
    }
  }
  .crafting-image {
    .video-btn {
      font-size: 20px;
      margin-top: -30px;
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }

  .services-area {
    padding-bottom: 30px;
  }
  .single-services {
    padding: 20px;

    h3 {
      font-size: 18px;
    }
  }
  .more-services-btn {
    margin-top: 15px;
  }
  .single-services-box {
    padding: 15px;

    .icon {
      font-size: 40px;
    }
    h3 {
      font-size: 18px;
    }
  }
  .services-box {
    .services-content {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .services-area {
    .single-services {
      padding: 15px;
    }
  }
  .services-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-dots {
          margin-top: 10px !important;

          button {
            &.owl-dot {
              span {
                margin: 0 3px;
                width: 14px;
                height: 14px;
              }
            }
          }
        }
      }
    }
  }

  .why-choose-us-img {
    margin-bottom: 30px;

    .front-img {
      top: 0;
      left: 0;
      width: 100%;
    }
    .back-img {
      display: none;
    }
  }
  .why-choose-us-area {
    &:hover {
      .why-choose-us-img {
        .front-img {
          top: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 45px;

    .section-title {
      margin-bottom: 10px;

      h2 {
        max-width: 100%;
      }
    }
    .single-box {
      padding: 20px;
      margin-top: 30px;

      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }

  .how-we-work {
    padding-bottom: 30px;
  }
  .single-work-box {
    margin-bottom: 30px;
    padding: 20px 15px;
    text-align: center;

    .number {
      display: inline-block;
    }
    h3 {
      font-size: 18px;
    }
  }

  .team-member-image {
    text-align: center;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 60px;
      bottom: 30px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        font-size: 40px;
        color: $template-color;
      }
      h3 {
        font-size: 18px;
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-boxes-area {
    padding-bottom: 30px;

    .single-box {
      margin-bottom: 30px;
      padding-left: 55px;

      span {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }

  .about-image {
    margin-top: 30px;
    text-align: center;

    &::before {
      display: none;
    }
    img {
      width: auto;
    }
  }

  .single-work {
    .works-content {
      h3 {
        font-size: 18px;
        margin-bottom: 0;
      }
      p {
        display: none;
      }
    }
    &:hover {
      .works-content {
        margin-top: -25px;
      }
    }
  }

  .portfolio-item {
    img {
      width: 100%;
    }
    .portfolio-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .single-feedback {
    padding-left: 0;
    max-width: 100%;
    margin-bottom: 40px;

    img {
      position: relative;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 18px;

      span {
        font-size: 14px;
      }
    }
  }
  .feedback-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          left: 0;
          bottom: -5px;
          right: 0;
        }
      }
    }
  }

  .skill-content {
    padding-left: 0 !important;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }

  .team-area {
    padding-bottom: 30px;
  }
  .single-team {
    .team-content {
      margin-top: 30px;

      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  .single-team-box {
    .team-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .cta-content {
    span {
      font-size: 13px;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 25px;
    }
  }

  .skill-area {
    padding: {
      top: 60px;
    }
  }
  .our-skill {
    margin-bottom: 30px;

    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }
  .skill-image {
    .back-image {
      right: 0;
    }
  }

  .funfacts-area {
    padding-bottom: 40px;
  }
  .funfact {
    margin-bottom: 20px;

    h3 {
      font-size: 30px;
    }
    p {
      font-size: 13px;
      text-transform: capitalize;
      margin-top: 3px;
    }
  }

  .blog-area {
    padding-bottom: 30px;
  }
  .single-blog-post {
    .blog-post-content {
      padding: 15px;

      .date {
        font-size: 13px;
      }
      h3 {
        line-height: 28px;
        font-size: 18px;
      }
    }
    .read-more-btn {
      font-size: 14px;
    }
    &.with-video {
      .blog-video {
        iframe {
          height: 160px;
        }
      }
    }
  }

  .contact-cta-content {
    .section-title {
      margin-bottom: 15px;
    }
    p {
      max-width: 100%;
      margin: 0 auto 25px;
    }
  }

  .features-content {
    .single-features-item {
      padding-left: 45px;

      .icon {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .features-image {
    margin-top: 30px;
  }

  .page-title-area {
    padding: {
      top: 160px;
      bottom: 85px;
    }
    h1 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 14px;
      }
    }
  }
  .pt-120 {
    padding-top: 50px;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .about-us-content {
    p {
      margin-top: 13px;
    }

    .single-about-box {
      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  .about-us-image {
    margin-top: 30px;
  }

  .pagination-area {
    margin-top: 15px;
  }

  .team-details-info {
    margin-top: 30px;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .personal-information {
      display: none;
    }
  }
  .overview-desc {
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }

  .login-form {
    padding: 20px;
    margin-top: 30px;

    h3 {
      font-size: 18px;
    }
    .text-right {
      text-align: left !important;
    }
  }

  .signup-form {
    padding: 20px;
    margin-bottom: 30px;

    h3 {
      font-size: 18px;
    }
  }

  .coming-soon {
    // height: 100%;
    padding: {
      top: 70px;
      bottom: 70px;
    }
    .coming-soon-content {
      h2 {
        font-size: 1em;
        line-height: 45px;
      }
      p {
        margin-top: 10px;
      }
      #timer {
        div {
          font-size: 40px;
          width: 120px;
          height: 120px;
          padding-top: 27px;
          line-height: 39px;
          margin: 0 5px 15px;
        }
      }
      form {
        button {
          position: relative;
          right: 0;
          top: 0;
          width: 100%;
          border-radius: 30px;
          margin-top: 10px;
          padding: 13px 0;
        }
      }
    }
  }

  .error {
    h1 {
      font-size: 140px;
    }
    h2 {
      font-size: 18px;
      margin: 0 0 30px;
    }
  }

  .faq-accordion {
    padding: 15px;

    .accordion {
      .accordion__item {
        .accordion__button {
          padding: 15px 15px;
          font-size: 16px;
        }
      }
    }
  }
  .faq-contact {
    margin-top: 30px;
    padding: 40px 15px;
    border-radius: 5px;
    text-align: center;

    h3 {
      font-size: 18px;
    }
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }

    .widget {
      h3,
      .widget-title {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }

  .blog-details-area {
    .blog-details {
      .article-img {
        .date {
          bottom: 2px;
          width: 65px;
          left: 2px;
          height: 60px;
          font-size: 15px;
          padding-top: 8px;
          line-height: 22px;
        }
      }
      .article-content {
        padding: 20px 15px;

        ul.category {
          margin-bottom: 20px;

          li {
            a {
              padding: 3px 14px 1px;
              margin-bottom: 3px;
              font-size: 13px;
            }
          }
        }
        h3 {
          font-size: 18px;
          margin-bottom: -10px;
          line-height: 26px;
        }
        .blockquote {
          padding: 20px 15px;
          border-left: 3px solid $template_color;

          p {
            font-size: 15px;
          }
        }
      }
    }
    .post-controls-buttons {
      text-align: center;
      padding: 20px 15px;

      div {
        a {
          padding: 7px 18px;
          font-size: 14px;
        }
      }
    }
    .post-comments {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
      }
      .single-comment {
        padding-left: 0;

        .comment-img {
          position: relative;
        }
        .comment-content {
          margin-top: 20px;
        }
        &.left-m {
          margin-left: 30px;
        }
      }
    }
    .leave-a-reply {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .form-group {
        margin-bottom: 10px;
      }
    }
  }

  .project-info {
    margin-top: 30px;

    ul {
      li {
        font-size: 16px;
        margin-bottom: 10px;

        span {
          font-size: 14px;
        }
      }
    }
  }
  .portfolio-details-content {
    h3 {
      font-size: 18px;
    }
  }

  .woocommerce-topbar {
    text-align: center;

    .woocommerce-result-count {
      margin-bottom: 15px;
    }
  }
  .single-product {
    .product-content {
      padding: 20px 15px;
      text-align: center;

      h3 {
        font-size: 18px;
      }
    }
  }

  .shop-details {
    padding: 15px;

    .product-entry-summary {
      h3 {
        font-size: 18px;
        margin-top: 25px;
      }
      h4 {
        font-size: 16px;
        margin: 18px 0;
      }
      form {
        .form-control {
          width: 100px;
        }
      }
    }
    .shop-details-tabs {
      #tabs {
        li {
          display: block;
          text-align: center;
        }
      }
      .content {
        h3 {
          font-size: 18px;
        }
      }
    }
  }
  .product-img-slides.owl-theme .owl-nav [class*="owl-"] {
    line-height: 30px;
  }
  .shop-details-area {
    padding-bottom: 30px;
  }
  .shop-related-prodcut {
    .section-title {
      margin-bottom: 20px;

      h2 {
        font-size: 22px;
      }
    }
  }

  .cart-buttons {
    margin-top: 35px;

    .coupon-box {
      position: relative;

      button {
        position: relative;
        border-radius: 5px;
        display: block;
        width: 100%;
        padding: 13px 0;
        margin-top: 8px;
      }
    }
    .btn {
      margin-top: 25px;
    }
  }
  .cart-totals {
    margin-top: 35px;
    padding: 25px;

    h3 {
      font-size: 18px;
    }
  }

  .user-actions {
    padding: 15px 18px 13px;
    margin-bottom: 30px;

    i {
      display: block;
      margin: {
        bottom: 5px;
        right: 0;
      }
    }
  }
  .checkout-area {
    .title {
      font-size: 18px;
    }
  }
  .billing-details {
    padding: 18px;
  }
  .order-details {
    padding: 18px;
    margin-top: 30px;
  }

  .contact-info-area {
    padding-bottom: 30px;

    .contact-info-box {
      margin-bottom: 30px;
      padding: 20px 15px;

      .icon {
        width: 70px;
        height: 70px;
        line-height: 70px;
        font-size: 25px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  #contactForm {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;

    &.ml-4 {
      margin-left: 0 !important;
    }
    ul {
      &.social-links {
        li {
          a {
            width: 35px;
            height: 35px;
            line-height: 36px;
            font-size: 15px;
          }
        }
      }
      &.list {
        li {
          a {
            font-size: 14px;
          }
        }
      }
      &.footer-recent-post {
        li {
          a {
            font-size: 14px;
          }
          span {
            font-size: 13px;
          }
        }
      }
      &.footer-contact-info {
        li {
          font-size: 14px;
        }
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }
  .copyright-area {
    margin-top: 30px;
    text-align: center;
    padding: {
      top: 25px;
      bottom: 25px;
    }
    p {
      font-size: 13px;
    }
    .text-right {
      text-align: center !important;
      margin-top: 10px;
    }
  }
  .go-top {
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    line-height: 35px;
  }
  .searchBoxTop {
    .seachBoxContainer {
      padding: 50px 0 25px !important;
    }
  }
  .searchBoxTop .searchClose {
    top: 0 !important;
    right: 15px !important;
  }
  .searchBoxTop .searchClose::before,
  .searchBoxTop .searchClose::after {
    height: 30px !important;
    top: 10px;
  }
  .navbar-brand {
    img {
      // max-width: 80px;
      max-width: 20vh;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 25px;
        }
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.7;
    }
  }
  .ptb-80 {
    padding: {
      top: 50px;
      bottom: 50px;
    }
  }
}

// smaller laptop screen
@media screen and (min-width: $value_lg_offset) and (max-width: $value_xl) and (orientation: landscape) {
  // @media only #{$media} and ($feature_min : $value_sm) and ($feature_max : $value_md) {
  .parallax_banner {
    h1 {
      font-size: min(max(5vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 30px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 22px) !important; /* adjust as necessary */
    }

    display: flex;
    align-items: center;

    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      // width: 25%; /* adjust this as needed */
      width: 48vw; /* adjust this as needed */

      margin-right: 10% !important;
      margin-top: -5%;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60vw;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .pt-120 {
    padding-top: 80px;
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 30px;
        }
      }
    }
  }
  .ptb-120 {
    padding: {
      top: 80px;
      bottom: 80px;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 20px;
        margin-bottom: 8px;
      }
    }
  }
  .section-title {
    h2 {
      font-size: 30px;
    }
    span {
      margin-bottom: 10px;
    }
  }
  .single-services {
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  .why-choose-inner-area {
    .single-box {
      h3 {
        font-size: 20px;
      }
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav .nav-item a {
        margin-left: 9px;
        margin-right: 9px;
      }
      .others-option {
        margin-left: 0;

        ul {
          li {
            &:last-child,
            &:first-child {
              display: none;
            }
          }
        }
      }
    }
  }

  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 60px;
      text-align: center;
    }
  }
  .hero-content {
    h1 {
      font-size: 35px;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 430px;
      left: 0;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  .circle-shape3 {
    bottom: 20%;
    right: 13%;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 70px;
  }
  .cta-about-content {
    .section-title {
      h2 {
        font-size: 25px;
        br {
          display: none;
        }
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }
  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape1,
  .circle-shape2,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .shape6,
  .shape7 {
    display: none;
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }
  .circle-dot {
    display: none;
  }

  .why-choose-us-img {
    margin-bottom: 85px;
    text-align: center;

    .back-img {
      left: 15px;
      top: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  .why-choose-inner-area {
    .section-title {
      margin-bottom: 20px;
    }
    .single-box {
      margin-top: 30px;
    }
  }

  .cta-about-content {
    max-width: unset;
    margin-left: 0;
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
    }
  }

  .how-we-work {
    padding-bottom: 50px;
  }
  .single-work-box {
    margin-bottom: 30px;
  }

  .team-area {
    padding-bottom: 50px;
  }

  .skill-area {
    padding: {
      top: 80px;
    }
  }
  .skill-image {
    text-align: center;
    margin-top: 40px;

    .back-image {
      right: -30px;
      top: 10%;
      left: 0;
      margin: 0 auto;
    }
  }

  .features-boxes-area {
    padding-bottom: 50px;

    .single-box {
      margin-bottom: 30px;
    }
  }

  .about-image {
    text-align: center;
    margin-top: 30px;

    &::before {
      display: none;
    }
  }

  .my-skill-area {
    .shape6,
    .shape7 {
      display: none;
    }
  }

  .about-us-image {
    margin-top: 30px;
  }

  .skill-content {
    padding-left: 0 !important;
    margin-top: 30px;
  }

  .blog-area {
    padding-bottom: 50px;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 80px;
      bottom: 50px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        color: $template-color;
      }
      h3 {
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-image {
    margin-top: 35px;
  }

  .grid {
    .item {
      width: 50%;
    }
  }

  .page-title-area {
    padding: {
      top: 165px;
      bottom: 115px;
    }
    h1 {
      font-size: 35px;
      margin-bottom: 15px;
    }
  }

  .team-details-info {
    .personal-information {
      display: none;
    }
  }

  .services-area {
    padding-bottom: 50px;
  }

  .login-form {
    margin-top: 35px;
  }

  .signup-form {
    margin-bottom: 35px;
  }

  .faq-accordion,
  .faq-contact {
    padding: 30px;
  }

  .contact-info-area {
    padding-bottom: 50px;
  }
  .contact-info-box {
    margin-bottom: 30px;
  }
  #contactForm {
    margin-top: 35px;
  }

  .shop-details-area {
    padding-bottom: 50px;
  }
  .product-entry-summary {
    margin-top: 35px;
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }
  }

  .project-info {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;
  }
  .copyright-area {
    margin-top: 50px;
  }
  .funfact {
    h3 {
      font-size: 40px;
    }
  }
  .single-footer-widget {
    h3 {
      margin-bottom: 30px;
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav {
        .nav-item {
          .dropdown_menu {
            width: 210px;
          }
        }
      }
    }
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.8;
    }
  }
  .banner-social-buttons {
    display: none;
  }
  .navbar-brand {
    img {
      max-width: 90px;
    }
  }
  .single-blog-box {
    .blog-post-content {
      h3 {
        font-size: 22px;
      }
    }
  }
  .ptb-80 {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

// large screens
@media screen and (min-width: $value_xl_offset) and (max-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;

    position: relative;
    z-index: 1;
    height: 100%;
    // overflow: hidden;
    pointer-events: auto;
    align-items: center;

    .imgHolder {
      position: relative;
      // width: 40%; /* adjust this as needed */
      width: 35vw; /* adjust this as needed */

      margin-left: 55% !important;
      // margin-top: 0%;
    }

    img {
      position: relative;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: min(max(8vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }
  }



  nav {
    .navbar-nav {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: $white-color;

      .nav-item {
        padding: 9px 5% !important;

        a {
          margin-left: 0;
          margin-right: 0;
        }
        .dropdown_menu {
          left: 0;

          li {
            .dropdown_menu {
              top: 0;
              left: -5px;
              position: relative;
              display: none;
              margin-top: 0;
              border: 1px solid #eeeeee;
              padding: 0 0 0 4px;
            }
            &:focus,
            &:hover {
              .dropdown_menu {
                display: block;
                top: 0 !important;
              }
            }
          }
        }
        &:hover ul {
          top: 40px;
        }
      }
    }
    .others-option {
      background-color: $white-color;
      padding-bottom: 10px;
      margin-left: 0;
      padding-left: 15px;

      ul li .side-menu {
        display: none;
      }
    }
  }
  
  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 70vw;
  }

  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape2,
  .circle-shape3,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape6,
  .shape7,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .circle-dot {
    display: none;
  }
  .main-banner {
    height: 100vh;
  }
  .ptb-120 {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .banner-image {
    text-align: center;
    img {
      max-width: 420px;
      left: 0;
      width: 100%;
    }
  }
  .hero-content h1 {
    font-size: 38px;
  }
  .circle-shape1 {
    right: 9%;
  }
  .pt-120 {
    padding-top: 90px;
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .why-choose-us-img {
    margin-bottom: 0;

    .front-img {
      top: 0;
      left: 0;
    }
    .back-img {
      display: none;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .section-title {
    span {
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 40px;
        }
      }
    }
  }
  .boxes-area {
    &::before,
    &::after {
      width: 35%;
    }
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }

  .grid {
    .item {
      width: 33.3333%;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 7%;
    }
    .banner-image {
      img {
        top: 79px;
        left: 0;
      }
    }
  }

  .banner-social-buttons {
    display: none;
  }

  .about-image {
    &::before {
      right: -20px;
      top: 30px;
      width: 92%;
      height: 91%;
    }
  }

  .crafting-content {
    .single-item {
      &.item-one {
        right: 0;
      }
      &.item-two {
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
      }
      &.item-four {
        right: 0;
      }
    }
  }

  .why-choose-us-content {
    .section-title {
      margin-bottom: 10px;
      h2 {
        font-size: 25px;
      }
    }
    p {
      margin-bottom: 8px;
    }
    .btn {
      margin-top: 10px;
    }
  }
  .skill-image {
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .blog-area {
    padding-bottom: 60px !important;
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .navbar-brand {
    img {
      max-width: 200px;
    }
  }
  .copyright-area {
    margin-top: 85px;
  }
}

// Obscure <2k screens
@media screen and (min-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;
    // justify-content: center;
    align-items: center;

    .imgHolder {
      position: relative;
      top: 5%;
      width: 30vw; /* adjust this as needed */

      margin-top: 1%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: 8vw;
      font-size: min(max(8vw, 24px), 72px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: 4vw;
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: 2vw;
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
    }
  }



  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 5%;
    max-width: 80%;
  }
  .shape6 {
    left: 8%;
  }
  .circle-shape1 {
    right: 26%;
    bottom: 30%;
  }
  .circle-shape2 {
    right: 15%;
    bottom: 0;
  }
  .circle-shape3 {
    right: 27%;
    bottom: 0;
  }
  .shape10 {
    right: 8%;
  }
  .shape18 {
    left: 25%;
  }
  .shape19 {
    left: 20%;
  }
  .shape20 {
    right: 20%;
  }
  .shape21 {
    top: 20%;
    right: 25%;
  }
  .shape22 {
    right: 18%;
    top: 25%;
  }
  .shape13 {
    left: 10%;
    top: 45%;
  }
  .footer-area {
    .shape18 {
      top: 30%;
      left: 10%;
    }
    .shape21 {
      top: 20%;
      right: 15%;
    }
    .shape7 {
      right: 7%;
      top: 34%;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      height: 100%;
      padding: {
        top: 290px;
        bottom: 225px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 24%;
      bottom: 20%;
    }
    .circle-shape2 {
      left: 18%;
      right: auto;
    }
    .circle-shape3 {
      right: auto;
      left: 22%;
    }
    .banner-image {
      img {
        top: 81px;
      }
    }
  }
  .shape24 {
    display: block;
  }
  .boxes-area {
    &::before,
    &::after {
      width: 40%;
    }
  }
  .why-choose-us-content {
    .section-title {
      h2 {
        font-size: 22px;
      }
    }
  }
}
--------------------------------------------------
$media: screen;
$feature_min: min-width;
$feature_max: max-width;

// Extra small devices (portrait phones, less than 576px)
$value_xs: 575px;

// Small devices (landscape phones, 576px and up)
$value_sm: 576px;

// Medium devices (tablets, 768px and up)
$value_md: 767px;
$value_md_offset: 768px;

// Large devices (desktops, 992px and up)
$value_lg: 992px;
$value_lg_offset: 993px;

// Extra large devices (large desktops, 1200px and up)
$value_xl: 1200px;
$value_xl_offset: 1201px;

// Extra extra large devices (TVs, large screens, 1600px and up)
$value_xx: 1600px;

$template-color: #38d16a;
$pink-color: #f54ea2;
$white-color: #ffffff;
$black-color: #121619;
$paragraph-color: #6084a4;
$bg-gray: #f9f9f9;

// Only For Mobile and Tab Navbar
@media only #{$media} and ($feature_max : $value_md) {
  .searchBoxTop {
    .seachBoxContainer {
      padding: 25px 0 55px;
    }
    .searchClose {
      cursor: pointer;
      position: absolute;
      top: auto;
      right: 11px;
      width: 40px;
      height: 40px;
      margin-top: 0;
      bottom: 11px;
    }
  }
}

@media screen and (max-width: $value_md_offset) and (orientation: portrait) {
  .contact-card {
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  .card.image,
  .card.info {
    flex: 1;
  }

  .card.image {
    order: 2;
  }

  .card.info {
    order: 1;
  }

  // @media screen and (max-width: $value_md) and (orientation: portrait) {
  //   .contact-card {
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-between;
  //     align-items: center;
  //     // padding: 1em;
  //     border: 4px solid #000;
  //     width: 600px;
  //     height: 100%;
  //     // margin: 0 auto;
  //   }

  //   .card .image {
  //     flex: 2;
  //     justify-content: flex-end;

  //   }

  //   .card .info {
  //     flex: 1;
  //     justify-content: flex-start;

  //   }

  //   .card {
  //     flex-direction: column;
  //   }

  // @media only #{$media} and ($feature_max : $value_xs) {
  .parallax_banner {
    // img {
    //   display: none;
    // }
    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      width: 35%; /* adjust this as needed */
      // margin-left: 20% !important;
      margin-top: -5%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }
}

// ipad 
@media screen and (min-width: $value_md_offset) and (orientation: landscape){
  .parallax_banner {

    h1 {
      font-size: min(max(6vw, 24px), 42px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }

    overflow: visible;
    display: flex;
    align-items: center;

    .imgHolder {
      z-index: 1;
      position: relative;
      width: 38vw; /* adjust this as needed */
      margin-left: 54vw !important;
      // margin-top: -5%;
      // bottom: 0 !important;
      top:0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60%;
  }

  .ptb-120 {
    padding: {
      top: 60px;
      bottom: 60px;
    }
  }
  .owl-carousel {
    &.owl-theme {
      .owl-dots {
        right: 15px;
        top: auto;
        bottom: 10px;

        .owl-dot {
          display: inline-block;

          span {
            margin: 0 3px;
            width: 15px;
            height: 15px;
          }
        }
      }
      .owl-nav {
        [class*="owl-"] {
          font-size: 16px;
          margin: -20px 0 0;
          left: 0;
          width: 35px;
          height: 35px;
          line-height: 38px;

          &.owl-next {
            right: 0;
            left: auto;
          }
        }
      }
    }
  }
  .btn {
    font-size: 14px;
    padding: 12px 25px;
  }
  p {
    font-size: 14px;
  }
  .preloader {
    .loader {
      h1 {
        font-size: 3rem;
      }
    }
  }
  .section-title {
    margin-bottom: 40px;

    span {
      font-size: 14px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 24px;
      max-width: 100%;
    }
  }
  .artflex-nav {
    padding-top: 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .navbar {
      padding: {
        left: 0;
        right: 0;
      }
    }
    .navbar-light {
      .navbar-toggler {
        border-color: rgba(0, 0, 0, 1);
        outline: 0;
        border-radius: 0;
      }
    }
    nav {
      .navbar-nav {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: $white-color;

        .nav-item {
          padding: 9px 2%;

          a {
            margin-left: 0;
            margin-right: 0;
          }
          .dropdown_menu {
            left: 0;

            li {
              .dropdown_menu {
                top: 0;
                left: -5px;
                position: relative;
                display: none;
                margin-top: 0;
                border: 1px solid #eeeeee;
                padding: 0 0 0 4px;
              }
              &:focus,
              &:hover {
                .dropdown_menu {
                  display: block;
                  top: 0 !important;
                }
              }
            }
          }
          &:hover ul {
            top: 40px;
          }
        }
      }
      .others-option {
        background-color: $white-color;
        padding-bottom: 10px;
        margin-left: 0;
        padding-left: 15px;

        ul li .side-menu {
          display: none;
        }
      }
    }
  }
  .shop-details .product-entry-summary form .input-counter {
    max-width: 120px;
    min-width: 120px;
  }
  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 30px;
    }
  }
  .banner-social-buttons {
    display: none;
  }

  .hero-header {
    // font-size: 25px !important;
  }
  .hero-content {
    h1 {
      // font-size: 27px;
    }
    h3 {
      // font-size: 25px !important;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
    margin-top: 0;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 330px;
      left: 0;
      margin: auto;
      width: 100%;
    }
  }
  .skill-image {
    text-align: center;
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  // .shape1,
  // .shape2,
  // .shape7,
  // .shape8,
  // .shape5,
  // .shape6,
  // .shape10,
  // .shape4,
  // .shape3,
  // .circle-shape1,
  // .circle-shape2,
  // .shape11,
  // .shape12,
  // .shape9,
  // .shape14,
  // .shape15,
  // .shape13,
  // .shape18,
  // .shape19,
  // .shape20,
  // .shape21,
  // .shape22,
  // .shape23,
  // .shape24,
  // .shape25,
  // .shape26,
  // .circle-dot {
  //   display: none;
  // }
  .circle-shape3 {
    right: 6%;
    bottom: 5%;
  }
  .circle-top {
    top: -440px;
    left: -350px;
  }
  .circle-bottom {
    bottom: -440px;
    right: -350px;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
        h1 {
          margin-bottom: 25px;
        }
      }
    }
  }
  .agency-portfolio-home {
    .main-banner {
      padding: {
        top: 145px;
        bottom: 90px;
      }

      .hero-content {
        h1 {
          font-size: 35px;
        }
      }
    }
  }
  .blog-home-slides {
    .col-lg-12 {
      padding: 0;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;

      div {
        &.tags {
          a {
            padding: 5px 15px;
            font-size: 14px;
          }
        }
      }
      h3 {
        margin: 15px 0 10px;
        font-size: 18px;
        line-height: 27px;
      }
      ul {
        li {
          margin-right: 2px;
          font-size: 12px;

          i {
            margin-right: 2px;
          }
        }
      }
    }
  }
  .blog-home-slides {
    &:hover {
      &.owl-carousel {
        &.owl-theme {
          .owl-nav {
            [class*="owl-"] {
              left: 5px;

              &.owl-next {
                right: 5px;
                left: auto;
              }
            }
          }
        }
      }
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }

  .cta-about {
    padding: {
      top: 60px;
      bottom: 60px;
      left: 10px;
      right: 5px;
    }
    .container-fluid {
      padding: {
        left: 15px !important;
        right: 15px !important;
      }
    }
  }
  .cta-about-image {
    background-image: unset;

    img {
      display: block;
    }
  }
  .cta-about-content {
    max-width: 100%;
    margin: {
      top: 35px;
    }
    padding: 0;
    h2 {
      br {
        display: none;
      }
    }
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;
      padding: 25px 8px;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
      i {
        font-size: 30px;
      }
      h6 {
        font-size: 15px;
      }
    }
  }
  .crafting-image {
    .video-btn {
      font-size: 20px;
      margin-top: -30px;
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
  }

  .services-area {
    padding-bottom: 30px;
  }
  .single-services {
    padding: 20px;

    h3 {
      font-size: 18px;
    }
  }
  .more-services-btn {
    margin-top: 15px;
  }
  .single-services-box {
    padding: 15px;

    .icon {
      font-size: 40px;
    }
    h3 {
      font-size: 18px;
    }
  }
  .services-box {
    .services-content {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .services-area {
    .single-services {
      padding: 15px;
    }
  }
  .services-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-dots {
          margin-top: 10px !important;

          button {
            &.owl-dot {
              span {
                margin: 0 3px;
                width: 14px;
                height: 14px;
              }
            }
          }
        }
      }
    }
  }

  .why-choose-us-img {
    margin-bottom: 30px;

    .front-img {
      top: 0;
      left: 0;
      width: 100%;
    }
    .back-img {
      display: none;
    }
  }
  .why-choose-us-area {
    &:hover {
      .why-choose-us-img {
        .front-img {
          top: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 45px;

    .section-title {
      margin-bottom: 10px;

      h2 {
        max-width: 100%;
      }
    }
    .single-box {
      padding: 20px;
      margin-top: 30px;

      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }

  .how-we-work {
    padding-bottom: 30px;
  }
  .single-work-box {
    margin-bottom: 30px;
    padding: 20px 15px;
    text-align: center;

    .number {
      display: inline-block;
    }
    h3 {
      font-size: 18px;
    }
  }

  .team-member-image {
    text-align: center;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 60px;
      bottom: 30px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        font-size: 40px;
        color: $template-color;
      }
      h3 {
        font-size: 18px;
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-boxes-area {
    padding-bottom: 30px;

    .single-box {
      margin-bottom: 30px;
      padding-left: 55px;

      span {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }

  .about-image {
    margin-top: 30px;
    text-align: center;

    &::before {
      display: none;
    }
    img {
      width: auto;
    }
  }

  .single-work {
    .works-content {
      h3 {
        font-size: 18px;
        margin-bottom: 0;
      }
      p {
        display: none;
      }
    }
    &:hover {
      .works-content {
        margin-top: -25px;
      }
    }
  }

  .portfolio-item {
    img {
      width: 100%;
    }
    .portfolio-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .single-feedback {
    padding-left: 0;
    max-width: 100%;
    margin-bottom: 40px;

    img {
      position: relative;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
    }
    h3 {
      font-size: 18px;

      span {
        font-size: 14px;
      }
    }
  }
  .feedback-slides {
    &.owl-carousel {
      &.owl-theme {
        .owl-nav {
          left: 0;
          bottom: -5px;
          right: 0;
        }
      }
    }
  }

  .skill-content {
    padding-left: 0 !important;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
  }

  .team-area {
    padding-bottom: 30px;
  }
  .single-team {
    .team-content {
      margin-top: 30px;

      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  .single-team-box {
    .team-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
      span {
        font-size: 13px;
      }
    }
  }

  .cta-content {
    span {
      font-size: 13px;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 25px;
    }
  }

  .skill-area {
    padding: {
      top: 60px;
    }
  }
  .our-skill {
    margin-bottom: 30px;

    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }
  .skill-image {
    .back-image {
      right: 0;
    }
  }

  .funfacts-area {
    padding-bottom: 40px;
  }
  .funfact {
    margin-bottom: 20px;

    h3 {
      font-size: 30px;
    }
    p {
      font-size: 13px;
      text-transform: capitalize;
      margin-top: 3px;
    }
  }

  .blog-area {
    padding-bottom: 30px;
  }
  .single-blog-post {
    .blog-post-content {
      padding: 15px;

      .date {
        font-size: 13px;
      }
      h3 {
        line-height: 28px;
        font-size: 18px;
      }
    }
    .read-more-btn {
      font-size: 14px;
    }
    &.with-video {
      .blog-video {
        iframe {
          height: 160px;
        }
      }
    }
  }

  .contact-cta-content {
    .section-title {
      margin-bottom: 15px;
    }
    p {
      max-width: 100%;
      margin: 0 auto 25px;
    }
  }

  .features-content {
    .single-features-item {
      padding-left: 45px;

      .icon {
        font-size: 30px;
      }
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .features-image {
    margin-top: 30px;
  }

  .page-title-area {
    padding: {
      top: 160px;
      bottom: 85px;
    }
    h1 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 14px;
      }
    }
  }
  .pt-120 {
    padding-top: 50px;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .about-us-content {
    p {
      margin-top: 13px;
    }

    .single-about-box {
      .icon {
        font-size: 40px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  .about-us-image {
    margin-top: 30px;
  }

  .pagination-area {
    margin-top: 15px;
  }

  .team-details-info {
    margin-top: 30px;

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .personal-information {
      display: none;
    }
  }
  .overview-desc {
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .skills {
      .skill-item {
        .skill-header {
          .skill-title {
            font-size: 15px;
          }
          .skill-percentage {
            font-size: 14px;
          }
        }
        .skill-bar {
          .bar-inner {
            .bar {
              height: 6px;
            }
          }
        }
      }
    }
  }

  .login-form {
    padding: 20px;
    margin-top: 30px;

    h3 {
      font-size: 18px;
    }
    .text-right {
      text-align: left !important;
    }
  }

  .signup-form {
    padding: 20px;
    margin-bottom: 30px;

    h3 {
      font-size: 18px;
    }
  }

  .coming-soon {
    // height: 100%;
    padding: {
      top: 70px;
      bottom: 70px;
    }
    .coming-soon-content {
      h2 {
        font-size: 1em;
        line-height: 45px;
      }
      p {
        margin-top: 10px;
      }
      #timer {
        div {
          font-size: 40px;
          width: 120px;
          height: 120px;
          padding-top: 27px;
          line-height: 39px;
          margin: 0 5px 15px;
        }
      }
      form {
        button {
          position: relative;
          right: 0;
          top: 0;
          width: 100%;
          border-radius: 30px;
          margin-top: 10px;
          padding: 13px 0;
        }
      }
    }
  }

  .error {
    h1 {
      font-size: 140px;
    }
    h2 {
      font-size: 18px;
      margin: 0 0 30px;
    }
  }

  .faq-accordion {
    padding: 15px;

    .accordion {
      .accordion__item {
        .accordion__button {
          padding: 15px 15px;
          font-size: 16px;
        }
      }
    }
  }
  .faq-contact {
    margin-top: 30px;
    padding: 40px 15px;
    border-radius: 5px;
    text-align: center;

    h3 {
      font-size: 18px;
    }
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }

    .widget {
      h3,
      .widget-title {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }

  .blog-details-area {
    .blog-details {
      .article-img {
        .date {
          bottom: 2px;
          width: 65px;
          left: 2px;
          height: 60px;
          font-size: 15px;
          padding-top: 8px;
          line-height: 22px;
        }
      }
      .article-content {
        padding: 20px 15px;

        ul.category {
          margin-bottom: 20px;

          li {
            a {
              padding: 3px 14px 1px;
              margin-bottom: 3px;
              font-size: 13px;
            }
          }
        }
        h3 {
          font-size: 18px;
          margin-bottom: -10px;
          line-height: 26px;
        }
        .blockquote {
          padding: 20px 15px;
          border-left: 3px solid $template_color;

          p {
            font-size: 15px;
          }
        }
      }
    }
    .post-controls-buttons {
      text-align: center;
      padding: 20px 15px;

      div {
        a {
          padding: 7px 18px;
          font-size: 14px;
        }
      }
    }
    .post-comments {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
      }
      .single-comment {
        padding-left: 0;

        .comment-img {
          position: relative;
        }
        .comment-content {
          margin-top: 20px;
        }
        &.left-m {
          margin-left: 30px;
        }
      }
    }
    .leave-a-reply {
      padding: 20px 15px;

      h3 {
        font-size: 18px;
        margin-bottom: 20px;
      }
      .form-group {
        margin-bottom: 10px;
      }
    }
  }

  .project-info {
    margin-top: 30px;

    ul {
      li {
        font-size: 16px;
        margin-bottom: 10px;

        span {
          font-size: 14px;
        }
      }
    }
  }
  .portfolio-details-content {
    h3 {
      font-size: 18px;
    }
  }

  .woocommerce-topbar {
    text-align: center;

    .woocommerce-result-count {
      margin-bottom: 15px;
    }
  }
  .single-product {
    .product-content {
      padding: 20px 15px;
      text-align: center;

      h3 {
        font-size: 18px;
      }
    }
  }

  .shop-details {
    padding: 15px;

    .product-entry-summary {
      h3 {
        font-size: 18px;
        margin-top: 25px;
      }
      h4 {
        font-size: 16px;
        margin: 18px 0;
      }
      form {
        .form-control {
          width: 100px;
        }
      }
    }
    .shop-details-tabs {
      #tabs {
        li {
          display: block;
          text-align: center;
        }
      }
      .content {
        h3 {
          font-size: 18px;
        }
      }
    }
  }
  .product-img-slides.owl-theme .owl-nav [class*="owl-"] {
    line-height: 30px;
  }
  .shop-details-area {
    padding-bottom: 30px;
  }
  .shop-related-prodcut {
    .section-title {
      margin-bottom: 20px;

      h2 {
        font-size: 22px;
      }
    }
  }

  .cart-buttons {
    margin-top: 35px;

    .coupon-box {
      position: relative;

      button {
        position: relative;
        border-radius: 5px;
        display: block;
        width: 100%;
        padding: 13px 0;
        margin-top: 8px;
      }
    }
    .btn {
      margin-top: 25px;
    }
  }
  .cart-totals {
    margin-top: 35px;
    padding: 25px;

    h3 {
      font-size: 18px;
    }
  }

  .user-actions {
    padding: 15px 18px 13px;
    margin-bottom: 30px;

    i {
      display: block;
      margin: {
        bottom: 5px;
        right: 0;
      }
    }
  }
  .checkout-area {
    .title {
      font-size: 18px;
    }
  }
  .billing-details {
    padding: 18px;
  }
  .order-details {
    padding: 18px;
    margin-top: 30px;
  }

  .contact-info-area {
    padding-bottom: 30px;

    .contact-info-box {
      margin-bottom: 30px;
      padding: 20px 15px;

      .icon {
        width: 70px;
        height: 70px;
        line-height: 70px;
        font-size: 25px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
  #contactForm {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;

    &.ml-4 {
      margin-left: 0 !important;
    }
    ul {
      &.social-links {
        li {
          a {
            width: 35px;
            height: 35px;
            line-height: 36px;
            font-size: 15px;
          }
        }
      }
      &.list {
        li {
          a {
            font-size: 14px;
          }
        }
      }
      &.footer-recent-post {
        li {
          a {
            font-size: 14px;
          }
          span {
            font-size: 13px;
          }
        }
      }
      &.footer-contact-info {
        li {
          font-size: 14px;
        }
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 25px;
    }
  }
  .copyright-area {
    margin-top: 30px;
    text-align: center;
    padding: {
      top: 25px;
      bottom: 25px;
    }
    p {
      font-size: 13px;
    }
    .text-right {
      text-align: center !important;
      margin-top: 10px;
    }
  }
  .go-top {
    bottom: 10px;
    right: 10px;
    font-size: 16px;
    width: 35px;
    height: 35px;
    line-height: 35px;
  }
  .searchBoxTop {
    .seachBoxContainer {
      padding: 50px 0 25px !important;
    }
  }
  .searchBoxTop .searchClose {
    top: 0 !important;
    right: 15px !important;
  }
  .searchBoxTop .searchClose::before,
  .searchBoxTop .searchClose::after {
    height: 30px !important;
    top: 10px;
  }
  .navbar-brand {
    img {
      // max-width: 80px;
      max-width: 20vh;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 25px;
        }
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.7;
    }
  }
  .ptb-80 {
    padding: {
      top: 50px;
      bottom: 50px;
    }
  }
}

// smaller laptop screen
@media screen and (min-width: $value_lg_offset) and (max-width: $value_xl) and (orientation: landscape) {
  // @media only #{$media} and ($feature_min : $value_sm) and ($feature_max : $value_md) {
  .parallax_banner {
    h1 {
      font-size: min(max(5vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 30px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 22px) !important; /* adjust as necessary */
    }

    display: flex;
    align-items: center;

    overflow: visible;

    .imgHolder {
      z-index: 1;
      position: relative;
      // top: 15%;
      // width: 25%; /* adjust this as needed */
      width: 48vw; /* adjust this as needed */

      margin-right: 10% !important;
      margin-top: -5%;
    }

    img {
      // position: relative;
      position: absolute !important;
      max-width: 100%;
      height: auto;
    }
  }


  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 60vw;
  }
  .contact-area {
    border-top: 1px solid #eee;
  }
  .pt-120 {
    padding-top: 80px;
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 30px;
        }
      }
    }
  }
  .ptb-120 {
    padding: {
      top: 80px;
      bottom: 80px;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 20px;
        margin-bottom: 8px;
      }
    }
  }
  .section-title {
    h2 {
      font-size: 30px;
    }
    span {
      margin-bottom: 10px;
    }
  }
  .single-services {
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  .why-choose-inner-area {
    .single-box {
      h3 {
        font-size: 20px;
      }
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav .nav-item a {
        margin-left: 9px;
        margin-right: 9px;
      }
      .others-option {
        margin-left: 0;

        ul {
          li {
            &:last-child,
            &:first-child {
              display: none;
            }
          }
        }
      }
    }
  }

  .main-banner {
    height: 100vh;
    padding: {
      top: 120px;
      bottom: 80px;
    }

    &.digital-agency-banner {
      padding-bottom: 60px;
      text-align: center;
    }
  }
  .hero-content {
    h1 {
      font-size: 35px;
    }
    p {
      margin: {
        bottom: 25px;
        top: 15px;
      }
    }
    margin-bottom: 45px;
  }
  .banner-image {
    text-align: center;
    img {
      position: relative;
      top: 0;
      right: 0;
      max-width: 430px;
      left: 0;
      width: 100%;
    }
  }
  .hero-image {
    margin-bottom: 30px;
  }
  .circle-shape3 {
    bottom: 20%;
    right: 13%;
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        margin: {
          left: 0;
          bottom: 0;
        }
      }
    }
  }
  .why-choose-inner-area {
    margin-top: 70px;
  }
  .cta-about-content {
    .section-title {
      h2 {
        font-size: 25px;
        br {
          display: none;
        }
      }
    }
  }
  .freelancer-portfolio-home {
    .banner-image {
      text-align: center;
    }
  }
  .single-blog-box {
    .blog-post-content {
      padding: 15px;
    }
  }
  .main-banner {
    &.freelancer-portfolio-home {
      padding-bottom: 0;

      .col-lg-6 {
        &:first-child {
          order: 2;
        }
        &:last-child {
          order: 1;
        }
      }
      .banner-image {
        img {
          top: 0;
          left: 0;
        }
      }
      .circle-shape3 {
        display: none;
      }
    }
  }
  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape1,
  .circle-shape2,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .shape6,
  .shape7 {
    display: none;
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }
  .circle-dot {
    display: none;
  }

  .why-choose-us-img {
    margin-bottom: 85px;
    text-align: center;

    .back-img {
      left: 15px;
      top: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  .why-choose-inner-area {
    .section-title {
      margin-bottom: 20px;
    }
    .single-box {
      margin-top: 30px;
    }
  }

  .cta-about-content {
    max-width: unset;
    margin-left: 0;
  }

  .crafting-content {
    overflow: hidden;
    margin-bottom: 40px;

    .single-item {
      width: 50%;
      position: relative;
      float: left;

      &.item-one {
        right: 0;
        animation: unset;
        top: 0;
      }
      &.item-two {
        animation: unset;
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
        animation: unset;
        bottom: 0;
      }
      &.item-four {
        right: 0;
        top: 0;
        animation: unset;
      }
    }
  }

  .how-we-work {
    padding-bottom: 50px;
  }
  .single-work-box {
    margin-bottom: 30px;
  }

  .team-area {
    padding-bottom: 50px;
  }

  .skill-area {
    padding: {
      top: 80px;
    }
  }
  .skill-image {
    text-align: center;
    margin-top: 40px;

    .back-image {
      right: -30px;
      top: 10%;
      left: 0;
      margin: 0 auto;
    }
  }

  .features-boxes-area {
    padding-bottom: 50px;

    .single-box {
      margin-bottom: 30px;
    }
  }

  .about-image {
    text-align: center;
    margin-top: 30px;

    &::before {
      display: none;
    }
  }

  .my-skill-area {
    .shape6,
    .shape7 {
      display: none;
    }
  }

  .about-us-image {
    margin-top: 30px;
  }

  .skill-content {
    padding-left: 0 !important;
    margin-top: 30px;
  }

  .blog-area {
    padding-bottom: 50px;
  }

  .boxes-area {
    &::before,
    &::after {
      background: #08071c;
      width: 100%;
    }
    padding: {
      top: 80px;
      bottom: 50px;
    }

    .single-box {
      padding: {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      margin-bottom: 30px;

      .icon {
        color: $template-color;
      }
      h3 {
        color: $white-color;
      }
      p {
        color: $white-color;
      }
      &.black-color {
        h3 {
          color: $white-color;
        }
        p {
          color: $white-color;
        }
      }
    }
  }

  .features-image {
    margin-top: 35px;
  }

  .grid {
    .item {
      width: 50%;
    }
  }

  .page-title-area {
    padding: {
      top: 165px;
      bottom: 115px;
    }
    h1 {
      font-size: 35px;
      margin-bottom: 15px;
    }
  }

  .team-details-info {
    .personal-information {
      display: none;
    }
  }

  .services-area {
    padding-bottom: 50px;
  }

  .login-form {
    margin-top: 35px;
  }

  .signup-form {
    margin-bottom: 35px;
  }

  .faq-accordion,
  .faq-contact {
    padding: 30px;
  }

  .contact-info-area {
    padding-bottom: 50px;
  }
  .contact-info-box {
    margin-bottom: 30px;
  }
  #contactForm {
    margin-top: 35px;
  }

  .shop-details-area {
    padding-bottom: 50px;
  }
  .product-entry-summary {
    margin-top: 35px;
  }

  .sidebar {
    margin: {
      top: 30px;
      bottom: 30px;
    }
  }

  .project-info {
    margin-top: 30px;
  }

  .single-footer-widget {
    margin-bottom: 30px;
  }
  .copyright-area {
    margin-top: 50px;
  }
  .funfact {
    h3 {
      font-size: 40px;
    }
  }
  .single-footer-widget {
    h3 {
      margin-bottom: 30px;
    }
  }
  .artflex-nav {
    nav {
      .navbar-nav {
        .nav-item {
          .dropdown_menu {
            width: 210px;
          }
        }
      }
    }
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .digital-agency-banner {
    &::before {
      content: "";
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      position: absolute;
      opacity: 0.8;
    }
  }
  .banner-social-buttons {
    display: none;
  }
  .navbar-brand {
    img {
      max-width: 90px;
    }
  }
  .single-blog-box {
    .blog-post-content {
      h3 {
        font-size: 22px;
      }
    }
  }
  .ptb-80 {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

// large screens
@media screen and (min-width: $value_xl_offset) and (max-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;

    position: relative;
    z-index: 1;
    height: 100%;
    // overflow: hidden;
    pointer-events: auto;
    align-items: center;

    .imgHolder {
      position: relative;
      // width: 40%; /* adjust this as needed */
      width: 35vw; /* adjust this as needed */

      margin-left: 55% !important;
      // margin-top: 0%;
    }

    img {
      position: relative;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: min(max(8vw, 24px), 52px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
      color: #6084a447;
    }
  }



  nav {
    .navbar-nav {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: $white-color;

      .nav-item {
        padding: 9px 5% !important;

        a {
          margin-left: 0;
          margin-right: 0;
        }
        .dropdown_menu {
          left: 0;

          li {
            .dropdown_menu {
              top: 0;
              left: -5px;
              position: relative;
              display: none;
              margin-top: 0;
              border: 1px solid #eeeeee;
              padding: 0 0 0 4px;
            }
            &:focus,
            &:hover {
              .dropdown_menu {
                display: block;
                top: 0 !important;
              }
            }
          }
        }
        &:hover ul {
          top: 40px;
        }
      }
    }
    .others-option {
      background-color: $white-color;
      padding-bottom: 10px;
      margin-left: 0;
      padding-left: 15px;

      ul li .side-menu {
        display: none;
      }
    }
  }
  
  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 3%;
    max-width: 70vw;
  }

  .shape1,
  .shape2,
  .shape8,
  .shape5,
  .shape10,
  .shape4,
  .shape3,
  .circle-shape2,
  .circle-shape3,
  .shape11,
  .shape12,
  .shape9,
  .shape14,
  .shape15,
  .shape13,
  .shape18,
  .shape6,
  .shape7,
  .shape19,
  .shape20,
  .shape21,
  .shape22,
  .shape23,
  .shape24,
  .shape25,
  .shape26,
  .circle-dot {
    display: none;
  }
  .main-banner {
    height: 100vh;
  }
  .ptb-120 {
    padding-top: 90px;
    padding-bottom: 90px;
  }
  .banner-image {
    text-align: center;
    img {
      max-width: 420px;
      left: 0;
      width: 100%;
    }
  }
  .hero-content h1 {
    font-size: 38px;
  }
  .circle-shape1 {
    right: 9%;
  }
  .pt-120 {
    padding-top: 90px;
  }
  .single-blog-post {
    .blog-post-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  .why-choose-us-img {
    margin-bottom: 0;

    .front-img {
      top: 0;
      left: 0;
    }
    .back-img {
      display: none;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 60px;
        }
      }
    }
  }
  .section-title {
    span {
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
    }
  }
  .startup-agency-home {
    .main-banner {
      .hero-content {
        h1 {
          font-size: 40px;
        }
      }
    }
  }
  .boxes-area {
    &::before,
    &::after {
      width: 35%;
    }
  }
  .circle-top {
    top: -330px;
    left: -330px;
  }
  .circle-bottom {
    bottom: -330px;
    right: -330px;
  }

  .grid {
    .item {
      width: 33.3333%;
    }
  }
  .single-product {
    .product-content {
      h3 {
        font-size: 18px;
        margin-bottom: 8px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 7%;
    }
    .banner-image {
      img {
        top: 79px;
        left: 0;
      }
    }
  }

  .banner-social-buttons {
    display: none;
  }

  .about-image {
    &::before {
      right: -20px;
      top: 30px;
      width: 92%;
      height: 91%;
    }
  }

  .crafting-content {
    .single-item {
      &.item-one {
        right: 0;
      }
      &.item-two {
        left: 0;
        top: 0;
      }
      &.item-three {
        left: 0;
      }
      &.item-four {
        right: 0;
      }
    }
  }

  .why-choose-us-content {
    .section-title {
      margin-bottom: 10px;
      h2 {
        font-size: 25px;
      }
    }
    p {
      margin-bottom: 8px;
    }
    .btn {
      margin-top: 10px;
    }
  }
  .skill-image {
    img.man-image {
      max-width: 360px;
      width: 100%;
    }
  }
  .blog-area {
    padding-bottom: 60px !important;
  }
  .services-box {
    .services-content {
      h3 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .navbar-brand {
    img {
      max-width: 200px;
    }
  }
  .copyright-area {
    margin-top: 85px;
  }
}

// Obscure <2k screens
@media screen and (min-width: $value_xx) and (orientation: landscape) {
  .parallax_banner {
    display: flex;
    // justify-content: center;
    align-items: center;

    .imgHolder {
      position: relative;
      top: 5%;
      width: 30vw; /* adjust this as needed */

      margin-top: 1%;
      bottom: 0 !important;
    }

    img {
      // position: relative;
      position: absolute !important;
      bottom: 0 !important;
      max-width: 100%;
      height: auto;
    }
    h1 {
      font-size: 8vw;
      font-size: min(max(8vw, 24px), 72px) !important; /* adjust as necessary */
    }
    h3 {
      font-size: 4vw;
      font-size: min(max(3vw, 16px), 36px) !important; /* adjust as necessary */
    }
    h4 {
      font-size: 2vw;
      font-size: min(max(2vw, 16px), 26px) !important; /* adjust as necessary */
    }
  }



  .main-banner {
    height: 100vh;
  }
  .hero-content {
    margin-top: 0;
    margin-left: 5%;
    max-width: 80%;
  }
  .shape6 {
    left: 8%;
  }
  .circle-shape1 {
    right: 26%;
    bottom: 30%;
  }
  .circle-shape2 {
    right: 15%;
    bottom: 0;
  }
  .circle-shape3 {
    right: 27%;
    bottom: 0;
  }
  .shape10 {
    right: 8%;
  }
  .shape18 {
    left: 25%;
  }
  .shape19 {
    left: 20%;
  }
  .shape20 {
    right: 20%;
  }
  .shape21 {
    top: 20%;
    right: 25%;
  }
  .shape22 {
    right: 18%;
    top: 25%;
  }
  .shape13 {
    left: 10%;
    top: 45%;
  }
  .footer-area {
    .shape18 {
      top: 30%;
      left: 10%;
    }
    .shape21 {
      top: 20%;
      right: 15%;
    }
    .shape7 {
      right: 7%;
      top: 34%;
    }
  }
  .agency-portfolio-home {
    .main-banner {
      height: 100%;
      padding: {
        top: 290px;
        bottom: 225px;
      }
    }
  }
  .freelancer-portfolio-home {
    .circle-shape1 {
      left: 24%;
      bottom: 20%;
    }
    .circle-shape2 {
      left: 18%;
      right: auto;
    }
    .circle-shape3 {
      right: auto;
      left: 22%;
    }
    .banner-image {
      img {
        top: 81px;
      }
    }
  }
  .shape24 {
    display: block;
  }
  .boxes-area {
    &::before,
    &::after {
      width: 40%;
    }
  }
  .why-choose-us-content {
    .section-title {
      h2 {
        font-size: 22px;
      }
    }
  }
}
--------------------------------------------------
