import { css, html, LitElement } from 'lit-element';
import { data } from '../fakeData.js';

export class PortfolioCards extends LitElement {
  static get properties() {
  return {
    project: { type: Object }
  }
}

constructor() {
  super();
  this.project = data;
}

firstUpdated() {

}

updated() {
  console.log(this.project);
}

  render() {
    return html`
      <div class="card">
        <div class="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio ducimus voluptatibus, similique cupiditate quos, est corporis voluptatum soluta, eius vero? Officiis sit provident commodi eveniet temporibus aliquam eius tempora!
        </div>
      </div>
    `
  }

  static get styles() {
    return [
      css `
        .card {
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
          height: 300px;
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

}

customElements.define('portfolio-cards', PortfolioCards);
