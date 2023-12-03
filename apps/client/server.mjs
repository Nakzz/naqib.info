import express from "express";
import next from "next";
import path from "path";
import bodyParser from "body-parser";
import http from "http";
import compression from "compression";
import helmet from "helmet";
import sitemap from "nextjs-sitemap-generator";

let __dirname = path.resolve();

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
    express.static(path.join(__dirname, "assets/images"), {
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

    // return app.render(req, res, "/waiting-portal"); //FOR COMING SOON PAGE REDIRECT
    // return app.render(req, res, "/coming-soon"); //FOR COMING SOON PAGE REDIRECT
  });

  const PORT = Number(process.env.PORT) || 7000;

  var httpServer = http.createServer(server);

  httpServer.listen(PORT, () => {
    // if (err) throw err;
    console.log(`> Read on http://localhost:${PORT}`);
  });
});
