import express from "express";
import { html } from "lit";
import { renderToString } from "lit/server";
import "../dist/pages/Home.js";

const router = express.Router();

router.get("/", (req, res) => {
  const pageContent = renderToString(html`<tridexia-home></tridexia-home>`);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tridexia - Home</title>
        <link rel="stylesheet" href="/styles/global.css">
      </head>
      <body>
        ${pageContent}
      </body>
    </html>
  `);
});

export default router;
