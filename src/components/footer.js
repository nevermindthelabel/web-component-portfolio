import { css, html, LitElement } from 'lit-element';

export class Footer extends LitElement {
  static get styles() {
    return [
      css`
        .footer {
          background-color: orange;
        }
      `
    ]
  }

  render() {
    return html`
      <div class="footer">
        <p>Footer works</p>
      </div>
    `
  }
}

customElements.define('portfolio-footer', Footer);
