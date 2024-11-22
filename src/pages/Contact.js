import { LitElement, html } from "lit";
import "../components/Header.js";
import "../components/ContactForm.js";
import "../components/Footer.js";

export class ContactPage extends LitElement {
  render() {
    return html`
      <tridexia-header></tridexia-header>
      <tridexia-contactform></tridexia-contactform>
      <tridexia-footer></tridexia-footer>
    `;
  }
}

customElements.define("contact-page", ContactPage);
