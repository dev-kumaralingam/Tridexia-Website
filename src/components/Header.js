import { LitElement, html, css } from "lit";

export class Header extends LitElement {
  static styles = css`
    header {
      background-color: navy;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }
    header img {
      height: 50px; /* Logo height */
      width: auto;  /* Keep aspect ratio */
    }
    nav a {
      color: white;
      text-decoration: none;
      margin: 0 1rem;
      font-weight: bold;
      font-family: 'Roboto', sans-serif; /* Ensure this font is loaded */
    }
    nav a:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <header>
        <img src="/images/logo.jpg" alt="Tridexia Logo" class="logo" />
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("tridexia-header", Header);
