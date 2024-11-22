import { LitElement, html, css } from "lit";

export class Footer extends LitElement {
  static styles = css`
    footer {
      background-color: navy;
      color: white;
      text-align: center;
      padding: 1rem 0;
      font-size: 0.9rem;
    }
    a {
      color: gold;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <footer>
        <p>
          © 2024 Tridexia. All rights reserved. | 
          <a href="mailto:hello@tridexia.com">hello@tridexia.com</a>
        </p>
      </footer>
    `;
  }
}

customElements.define("tridexia-footer", Footer);
