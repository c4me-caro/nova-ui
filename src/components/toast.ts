import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('nv-toast')
export class NvToast extends LitElement {

  static styles = css`
.toast-container {
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 35%;
}

.toast {
  background-color: var(--background-component-color);
  border: none;
  border-radius: 6px;
  color: var(--text-color);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  margin: 12px;
}

.toast-close {
  padding: 0 8px;
}

.toast-close:hover {
  cursor: pointer;
  color: var(--text-emphasys-color);
}

.toast-content {
  padding: 8px;
}
  `;

  create_toast(msg: String, text: String) {
    const toast_container = this.renderRoot.querySelector('#toast-container');
    if (!toast_container) return;

    const new_toast = document.createElement("div");
    new_toast.innerHTML = `
<div class="toast">
  <div class="toast-close">x</div>
  <div class="toast-content">
    ${msg}
    <p>${text}</p>
  </div>
</div>
    `;

    new_toast.querySelector(".toast-close")?.addEventListener('click', () => {
      new_toast.remove();
    });

    toast_container.appendChild(new_toast);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('launch-toast', (e: any) => {
      this.create_toast(e.detail.msg, e.detail.text);
    });
  }

  render() {
    return html`<div class="toast-container" id="toast-container"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nv-toast': NvToast;
  }
}