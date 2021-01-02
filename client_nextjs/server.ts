const express = require('express');
const next = require('next');
const path = require('path');
const bodyParser = require('body-parser');
const keys = require("./server/config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);
var fs = require("fs");
var http = require("http");
var https = require("https");

var privateKey = fs.readFileSync("../cert/privkey.pem", "utf8");
var certificate = fs.readFileSync("../cert/fullchain.pem", "utf8");
var credentials = { key: privateKey, cert: certificate };

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
        // Static files
        // https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
    server.use('/images', express.static(path.join(__dirname, 'images'), {
        maxAge: dev ? '0' : '365d'
    }));

    server.use('/_next', express.static(path.join(__dirname, '.next'), {
        maxAge: dev ? '0' : '365d'
    }));

    server.use(bodyParser.json());

    server.get('*', (req, res) => {
        if (!req.secure) // HTTP=> HTTPS
        res.redirect('https://' + req.headers.host + req.url);
        return handle(req, res)
        // return app.render(req, res, '/coming-soon') //FOR COMING SOON PAGE REDIRECT
    });

    //NOT USING STRIPE
    // server.post('/api/stripe/checkout', async (req, res) => {
    //     await stripe.charges.create({
    //         amount: req.body.amount,
    //         currency: 'usd',
    //         description: 'Fleja React Next eCommerce + Landing Page Templates',
    //         source: req.body.token.id
    //     });
    //     res.send({})
    // });

    const PORT = Number(process.env.PORT) || 7000;

    var httpServer = http.createServer(server);
		var httpsServer = https.createServer(credentials, server);

        httpServer.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT}`)
    });

    httpsServer.listen(PORT+1, (err) => {
        if (err) throw err
        console.log(`> Read on http://localhost:${PORT+1}`)
    });

})