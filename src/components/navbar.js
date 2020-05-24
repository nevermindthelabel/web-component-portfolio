import { css, html, LitElement } from 'lit-element';

export class Navbar extends LitElement {

  render() {
    return html`
      <h1>navbar works</h1>
    `
  }
}

customElements.define('portfolio-navbar', Navbar);
