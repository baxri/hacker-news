const next = require('next');
const url = require('url');
const path = require('path');
const http = require('http');
const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV != 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();


    server.use('/graphql', expressGraphQL({
        schema,
        graphiql: true
    }));

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {

        if (err) {
            throw err;
        }

        console.log(`Listening on port ${port}`);
    })

    // http.createServer((req, res) => {

    //     const parsedUrl = url.parse(req.url, true);

    //     const { pathname } = parsedUrl;

    //     if (pathname === '/service-worker.js') {
    //         const filepath = path.join(__dirname, '.next', pathname);
    //         app.serveStatic(req, res, filepath);
    //     } else {
    //         handle(req, res, parsedUrl);
    //     }

    // }).listen(port, () => {
    //     console.log(`Listening on port ${port}`);
    // });
});