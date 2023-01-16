import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class Test01 extends LitElement {
  render() {
    return html``;
  }
}
customElements.get('j-01') && customElements.define('j-01', Test01);

declare global {
  interface HTMLElementTagNameMap {
    'j-01': Test01;
  }
}
