import { LitElement, html, css } from 'lit-element';
import './components/navbar.js';
import './components/footer.js';
import './components/cards.js';

export class WebComponentPortfolio extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-rows: auto 1fr auto;
        height: 100vh;
      }
      main {
        color: #f1f1f1;
        background: url('../assets/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg') no-repeat center center;
      }
      main::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: rgba(0,0,0,0.25);
      }
    `;
  }

  render() {
    return html`
    <nav>
    <portfolio-navbar></portfolio-navbar>
    </nav>
    <main>
      <div class="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam maxime, sequi quibusdam officiis soluta corrupti maiores deleniti magnam fugit ipsum itaque obcaecati iure architecto est! Repellat assumenda delectus tempora?
      </div>
      <portfolio-cards></portfolio-cards>
    </main>
    <footer>
      <portfolio-footer></portfolio-footer>
    </footer>
    `;
  }
}
