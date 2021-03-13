import { css, html, LitElement } from 'lit-element';

export class Navbar extends LitElement {

  static get styles() {
    return [css`
      .navbar {
        overflow: hidden;
        background-color: #f1f1f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 90px 20px;
        transition: .4s;
        top: 0;
        left: 0;
      }
      .navbar a {
        align-items: flex-start;
        color: black;
        justify-content: baseline;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        border-radius: 4px;
      }
      .brand {
        align-items: baseline;
        justify-content: baseline;
      }
      .links a {
        justify-content: flex-end;
        align-items: flex-end;
      }
      .links a:last-child {
        margin-right: 3em;
      }
    `];
  }

  render() {
    return html`
    <div class="navbar">
      <a href="#" class="brand">Matt Kilcup</a>
      <div class="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Portfolio</a>
      </div>
    </div>
    `
  }

  constructor() {
    super();
  }
}

customElements.define('portfolio-navbar', Navbar);
