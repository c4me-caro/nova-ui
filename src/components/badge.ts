import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nv-badge')
export class NvBadge extends LitElement {
  @property({ type: String }) text = "";
  @property({ type: String }) type = "";

  static styles = css`
.badge {
  border-radius: 16px;
  border: none;
  padding: 0.2rem 0.6rem;
  vertical-align: middle;
  font-size: 0.6rem;
  border: 1px solid #dbdbdb;
}

.badge-active {
  background-color: var(--primary-color);
  color: var(--background-color);
  border: none;
}

.badge-alert {
  background-color: var(--secondary-color);
  color: var(--background-color);
  border: none;
}

.badge-accert {
  background-color: var(--positive-color);
  color: var(--background-color);
  border: none;
}

.badge-inactive {
  background-color: var(--text-color);
  color: var(--background-color);
  border: none;
}
  `;

  render() {
    return html`<span class="badge ${this.type}">${this.text}</button>`;
    // active, inactive, accert, alert
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-button': NvBadge;
  }
}