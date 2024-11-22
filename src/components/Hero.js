import { LitElement, html, css } from "lit";

export class Hero extends LitElement {
  static styles = css`
    section {
      background: linear-gradient(45deg, navy, gold);
      color: white;
      text-align: center;
      padding: 3rem 1rem;
      font-family: 'Roboto', sans-serif;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    button {
      background-color: gold;
      color: navy;
      padding: 0.8rem 2rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
    }
    button:hover {
      background-color: white;
      color: navy;
    }
  `;

  render() {
    return html`
      <section>
        <h1>Welcome to Tridexia</h1>
        <p>Crafting Code | Cultivating Minds | Creating Futures</p>
        <button onclick="window.location.href='/contact'">Get in Touch</button>
      </section>
    `;
  }
}

customElements.define("tridexia-hero", Hero);
