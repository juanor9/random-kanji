import express from "express";
import configExpress from "./config/express.mjs";
import routes from "./routes.mjs";
import https from 'https';
import fs from 'fs';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const secondPort = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  configExpress(server);
  routes(server);

  server.all('*', (req, res) => handle(req, res));

  https.createServer({
    key: fs.readFileSync('./localhost+2-key.pem'),
    cert: fs.readFileSync('./localhost+2.pem'),
  }, server).listen(secondPort, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:${secondPort}`);
  });
});