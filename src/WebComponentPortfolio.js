import { LitElement, html, css } from 'lit-element';
import './components/navbar.js';
import './components/footer.js';

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
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        width: 100vw;
        background-image: url('../assets/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
      }
      .container {
        background-color: #FFFFFF;
        opacity: .8;
        max-width: 960px;
        padding: 1em;
        margin: 2em auto;
      }
    `;
  }

  render() {
    return html`
    <portfolio-navbar></portfolio-navbar>
      <div class="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam maxime, sequi quibusdam officiis soluta corrupti maiores deleniti magnam fugit ipsum itaque obcaecati iure architecto est! Repellat assumenda delectus tempora?
      </div>
      <portfolio-footer></portfolio-footer>
    `;
  }

  scrollCheck() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementsByClassName('navbar').style.padding = "30px 10px";
      document.getElementsByClassName('brand').style.fontSize = "25px";
    } else {
      document.getElementsByClassName('navbar').style.padding = "90px 20px";
      document.getElementsByClassName('brand').style.fontSize = "35px";
    }
  }
}
