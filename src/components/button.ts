import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nv-button')
export class NvButton extends LitElement {
  @property({ type: String }) text = "";
  @property({ type: String }) type = "";

  static styles = css`
button {
  color: var(--background-color);
  border: none;
  font-family: "Poppins Regular", sans-serif;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
  transition: 0.3s;
  font-size: medium;
  font-weight: 600;
}

button.primary {
  background-color: var(--primary-color);
}

button.primary:hover {
  background-color: var(--primary-hover-color);
}

button.secondary {
  background-color: var(--secondary-color);
}

button.secondary:hover {
  background-color: var(--secondary-hover-color);
}

button.inactive {
  background-color: var(--text-color);
}

button.inactive:hover {
  background-color: var(--text-emphasys-color);
}

button.accert {
  background-color: var(--positive-color);
}

button.accert:hover {
  background-color: var(--positive-dark-color);
}
  `;

  render() {
    return html`<button class="${this.type}">${this.text}</button>`;
    // primary, secondary, accert, inactive
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-button': NvButton;
  }
}