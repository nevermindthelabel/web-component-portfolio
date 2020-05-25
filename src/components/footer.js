import { css, html, LitElement } from 'lit-element';

export class Footer extends LitElement {
  static get styles() {
    return [
      css`

      `
    ]
  }

  render() {
    return html`
      <p>Footer works</p>
    `
  }
}

customElements.define('portfolio-footer', Footer);
