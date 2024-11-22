import express from "express";
import { html } from "lit";
import { renderToString } from "lit/server";
import "../dist/pages/Contact.js";

const router = express.Router();

router.get("/", (req, res) => {
  const pageContent = renderToString(html`<tridexia-contact></tridexia-contact>`);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tridexia - Contact Us</title>
        <link rel="stylesheet" href="/styles/global.css">
      </head>
      <body>
        ${pageContent}
      </body>
    </html>
  `);
});

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  // Here, you can add logic to process the form data, like saving to a database or sending an email.

  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tridexia - Contact Submitted</title>
      </head>
      <body>
        <h1>Thank you, ${name}!</h1>
        <p>Your message has been received. We will get back to you at ${email} soon.</p>
        <a href="/contact">Go Back</a>
      </body>
    </html>
  `);
});

export default router;
