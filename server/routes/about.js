import express from "express";
import { html } from "lit";
import { renderToString } from "lit/server";
import "../dist/pages/About.js";

const router = express.Router();

router.get("/", (req, res) => {
  const pageContent = renderToString(html`<tridexia-about></tridexia-about>`);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tridexia - About Us</title>
        <link rel="stylesheet" href="/styles/global.css">
      </head>
      <body>
        ${pageContent}
      </body>
    </html>
  `);
});

export default router;
