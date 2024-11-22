import { LitElement, html, css } from "lit";

export class Services extends LitElement {
  static styles = css`
    section {
      padding: 2rem 1rem;
      text-align: center;
      font-family: 'Roboto', sans-serif;
    }
    h2 {
      color: navy;
      margin-bottom: 1rem;
    }
    .services-grid {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .service {
      background-color: white;
      border: 2px solid gold;
      border-radius: 10px;
      padding: 1rem;
      width: 250px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .service h3 {
      color: navy;
      margin-bottom: 0.5rem;
    }
    .service p {
      color: #555;
    }
  `;

  render() {
    return html`
      <section>
        <h2>Our Services</h2>
        <div class="services-grid">
          <div class="service">
            <h3>Edu-Tech</h3>
            <p>Empowering education with technology-driven solutions.</p>
          </div>
          <div class="service">
            <h3>Web Solutions</h3>
            <p>Custom websites and applications for your business needs.</p>
          </div>
          <div class="service">
            <h3>Digital Solutions</h3>
            <p>Innovative tools to transform your digital presence.</p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("tridexia-services", Services);
