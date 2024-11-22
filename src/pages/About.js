import { LitElement, html } from "lit";
import "../components/Header.js";
import "../components/About.js";
import "../components/Footer.js";

export class AboutPage extends LitElement {
  render() {
    return html`
      <tridexia-header></tridexia-header>
      <tridexia-about></tridexia-about>
      <tridexia-footer></tridexia-footer>
    `;
  }
}

customElements.define("about-page", AboutPage);
