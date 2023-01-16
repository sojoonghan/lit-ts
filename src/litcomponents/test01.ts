import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('j-01')
export class Test01 extends LitElement {
  @property() name = 'jihoon';
  static styles = css``;
  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'j-01': Test01;
  }
}
