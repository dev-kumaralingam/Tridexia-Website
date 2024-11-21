import { LitElement, html, css } from 'lit';
import './components/Header';
import './components/Hero';
import './components/Services';
import './components/About';
import './components/ContactForm';
import './components/Footer';

class TridexiaWebsite extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Montserrat', sans-serif;
    }
  `;

  render() {
    return html`
      <header-component></header-component>
      <hero-component></hero-component>
      <services-component></services-component>
      <about-component></about-component>
      <contact-form-component></contact-form-component>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('tridexia-website', TridexiaWebsite);