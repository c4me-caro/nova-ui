import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nv-alert')
export class NvAlert extends LitElement {
  @property({ type: String }) title = "";
  @property({ type: String }) text = "";

  static styles = css`
.alert {
  border-left: 4px solid var(--secondary-hover-color);
  color: var(--secondary-dark-color);
  background: var(--secondary-light-color);
  padding: 1rem;
}
  `;

  render() {
    return html`<div class="alert"><strong>${this.title}</strong> ${this.text}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-alert': NvAlert;
  }
}