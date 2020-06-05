import { css, html, LitElement } from 'lit-element';

export class Cards extends LitElement {
  static get styles() {
    return [
      css `
        .card {
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
        }
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .container {
          padding: 2px 16px;
        }
      `
    ]
  }

  render() {
    return html`
      <div class="card">
        <div class="container">
        </div>
      </div>
    `
  }

}

customElements.define('portfolio-cards', Cards);
