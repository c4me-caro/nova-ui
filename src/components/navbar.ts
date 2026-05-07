import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nv-navbar')
export class NvNavbar extends LitElement {
  @property({ type: String }) logo = "";

  static styles = css`
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

.nav-content {
  margin: auto;
  border: 1px solid var(--inactive-color);
  border-radius: 24rem;
  background-color: var(--background-component-color);
  display: flex;
  padding: 0.4rem 1rem;
}

.nav-logo {
  width: 4rem;
  margin-right: 3rem;
}

.nav-content .nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
  `;

  render() {
    return html`
<nav>
  <div class="nav-content">
    <div class="nav-logo">
      <img src="${this.logo}">
    </div>
    <ul class="nav-links">
      <slot></slot>
    </ul>
  </div>
</nav>
    `;
  }
}

@customElement('nv-nav-item')
export class NvNavItem extends LitElement {
  @property({ type: String }) text = "";

  static styles = css`
.nav-item {
  padding: 6px 1.3rem;
  margin: 0 0.3rem;
}

.nav-item.active {
  background-color: var(--text-emphasys-color);
  border-radius: 28px;
  color: var(--background-component-color);
}

.nav-item.active:hover {
  background-color: var(--text-emphasys-darker-color);
  border-radius: 28px;
  color: var(--background-component-color);
}

.nav-item:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 28px;
}
  `;

  render() {
    return html`<li class="nav-item">${this.text}</li>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-navbar': NvNavbar;
    'nv-nav-item': NvNavItem;
  }
}