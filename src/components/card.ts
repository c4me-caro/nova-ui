import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './button.js';

@customElement('nv-cards')
export class NvCards extends LitElement {
  static styles = css`
.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  justify-content: center;
  align-items: center;
}
  `;

  render() {
    return html`<div class="cards"><slot></slot></div>`;
    // active, inactive, accert, alert
  }
}

@customElement('nv-card')
export class NvCard extends LitElement {
  @property({ type: String }) image = "";
  @property({ type: String }) title = "";
  @property({ type: String }) subtle = "";
  @property({ type: String }) btnId = "";
  @property({ type: String }) btnText = "";
  @property({ type: String }) linkText = "";
  @property({ type: String }) href = "";

  static styles = css`
.card {
  border: 1px solid var(--inactive-color);
  width: 300px;
  border-radius: 6px;
}

.card img {
  width: 300px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.card-content {
  padding: 0.5rem;
}

.card-content p {
  font-size: medium;
}

.card-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 12px;
  padding: 1rem;
}
  `;

  render() {
    return html`
<div class="card">
  <img src="${this.image}">
  <div class="card-content">
    <h4>${this.title}</h4>
    <h6>${this.subtle}</h6>
    <p><slot></slot></p>
  </div>
  <div class="card-footer">
    <a href="${this.href}">${this.linkText}</a>
    <nv-button class="primary" text="${this.btnText}" id="${this.btnId}"></nv-button>
  </div>
</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-cards': NvCards;
    'nv-card': NvCard;
  }
}