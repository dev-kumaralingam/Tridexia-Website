import { LitElement, html, css } from "lit";

export class About extends LitElement {
  static styles = css`
    section {
      padding: 2rem 1rem;
      background-color: #f4f4f4;
      text-align: center;
      font-family: 'Roboto', sans-serif;
    }
    h2 {
      color: navy;
    }
    p {
      color: #555;
      max-width: 800px;
      margin: 0 auto;
    }
  `;

  render() {
    return html`
      <section>
        <h2>About Tridexia</h2>
        <p>
          At Tridexia, we specialize in Edu-Tech, Web Solutions, and Digital
          Solutions. Our mission is to craft innovative solutions, empower
          minds, and shape the future through technology.
        </p>
      </section>
    `;
  }
}

customElements.define("tridexia-about", About);
