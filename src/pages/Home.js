import { LitElement, html } from "lit";
import "../components/Header.js";
import "../components/Hero.js";
import "../components/Services.js";
import "../components/Footer.js";

export class HomePage extends LitElement {
  render() {
    return html`
      <tridexia-header></tridexia-header>
      <tridexia-hero></tridexia-hero>
      <tridexia-services></tridexia-services>
      <tridexia-footer></tridexia-footer>
    `;
  }
}

customElements.define("home-page", HomePage);
