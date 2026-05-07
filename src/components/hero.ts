import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nv-hero')
export class NvHero extends LitElement {
  @property({ type: String }) image = "";

  static styles = css`
.hero {
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100dvh;
  background: radial-gradient(
    color-mix(in srgb, var(--background-color), transparent 15%),
    color-mix(in srgb, var(--background-color), transparent 10%)
  ), var(--hero-image);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cont {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
}
  `;

  render() {
    return html`<div class="hero" style="--hero-image: url('${this.image}');"><div class="cont"><slot></slot></div></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-hero': NvHero;
  }
}