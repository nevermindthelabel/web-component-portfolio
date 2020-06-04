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

  render() {
    return html`
      <div class="card">
      </div>
    `
  }

}

customElements.define('portfolio-cards', Cards);
