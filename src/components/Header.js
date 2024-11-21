import { LitElement, html, css } from 'lit';

class HeaderComponent extends LitElement {
  static styles = css`
    /* Header styles */
  `;

  render() {
    return html`
      <header>
        <div class="logo">
          <img src="logo.svg" alt="Tridexia Logo">
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);