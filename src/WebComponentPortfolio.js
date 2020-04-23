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
        color: #1a2b42;
        min-width: 100vw;
        margin: 0 auto;
        text-align: center;
        background-image: url('../assets/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
      }
    `;
  }

  render() {
    return html`

    `;
  }
}
