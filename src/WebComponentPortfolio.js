import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

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
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }
    `;
  }

  render() {
    return html`
    `;
  }
}