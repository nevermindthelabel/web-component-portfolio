import { css, html, LitElement } from 'lit-element';

export class Cards extends LitElement {
  static get styles() {
    return [
      css `
        .card {

        }
      `
    ]
  }

}

customElements.define('portfolio-cards', Cards);
