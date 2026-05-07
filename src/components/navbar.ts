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
  position: absolute;
  width: 100%;
  z-index: 1;
  border: none;
}

.nav-content {
  margin: auto;
  border-radius: 24rem;
  background-color: var(--background-component-color);
  display: flex;
  padding: 0.4rem 1rem;
  align-items: center;
}

.nav-logo {
  margin: 0;
  margin-right: 3rem;
  width: 3.5rem;
  height: 3.5rem;
}

.nav-logo img {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin: auto;
}

.nav-content .nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
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
  @property({ type: String }) type = "";

  static styles = css`
.nav-item {
  padding: 6px 1rem;
  margin: 0 0.3rem;
  list-style: none;
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
  background: color-mix(in srgb, var(--text-emphasys-color), transparent 80%);
  border-radius: 28px;
}
  `;

  render() {
    return html`<li class="nav-item ${this.type}">${this.text}</li>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-navbar': NvNavbar;
    'nv-nav-item': NvNavItem;
  }
}