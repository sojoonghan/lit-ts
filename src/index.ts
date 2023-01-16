import { html } from './utils/html';

export class Index extends HTMLElement {
  static get observedAttribues() {
    return [];
  }
  #template: HTMLTemplateElement;
  constructor() {
    super();
    this.#template = document.createElement('template');
    this.attachShadow({ mode: 'open' });
  }

  attributeChagedCallback(arrName: string, oldvalue: string, newvalue: string | null) {}

  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {}
  adoptedCallback() {}

  static css = html` <style></style>`;

  render() {
    this.#template.innerHTML = html` ${Index.css}
      <h1>test 01</h1>`;
    this.shadowRoot?.append(this.#template.content.cloneNode(true));
  }
}
customElements.get('my-index') ?? customElements.define('my-index', Index);

declare global {
  interface HTMLElementTagNameMap {
    'my-index': Index;
  }
}
