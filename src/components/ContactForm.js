import { LitElement, html, css } from "lit";

export class ContactForm extends LitElement {
  static styles = css`
    form {
      max-width: 500px;
      margin: 2rem auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    input,
    textarea,
    button {
      padding: 0.8rem;
      font-size: 1rem;
      border: 2px solid navy;
      border-radius: 5px;
    }
    button {
      background-color: gold;
      color: navy;
      cursor: pointer;
      font-weight: bold;
      border: none;
    }
    button:hover {
      background-color: navy;
      color: white;
    }
  `;

  render() {
    return html`
      <form method="post" action="/contact">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    `;
  }
}

customElements.define("tridexia-contactform", ContactForm);
