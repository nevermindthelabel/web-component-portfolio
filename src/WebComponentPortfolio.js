import { LitElement, html, css } from 'lit-element';

export class WebComponentPortfolio extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        min-width: 100vw;
        margin: 0 auto;
        text-align: center;
        background-image: url('../assets/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
      }
      .container {
        background-color: #FFFFFF;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quisquam maxime, sequi quibusdam officiis soluta corrupti maiores deleniti magnam fugit ipsum itaque obcaecati iure architecto est! Repellat assumenda delectus tempora?
      </div>
    `;
  }
}
