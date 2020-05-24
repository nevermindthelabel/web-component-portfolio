import { css, html, LitElement } from 'lit-element';

export class Navbar extends LitElement {

  static get styles() {
    return css`
      .navbar {
        overflow: hidden;
        background-color: #f1f1f1;
        padding: 90px 10px;
        transition: .4s;
        position: fixed;
        width: 100%;
        top: 0;
      }
      .navbar a {
        float: left;
        color: black;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        border-radius: 4px;
      }
    `;
  }

  render() {
    return html`
    <div class="navbar">
      <a href="#" class="brand">Matt Kilcup</a>
    </div>
    `
  }
}

customElements.define('portfolio-navbar', Navbar);
