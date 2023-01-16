import { html } from '../../utils/html';

export class Fetch extends HTMLElement {
  static get observedAttribues() {
    return [];
  }
  private template: HTMLTemplateElement;
  constructor() {
    super();
    this.template = document.createElement('template');
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
    this.template.innerHTML = html` ${Fetch.css}
      <h1>fetch 01</h1>`;
    this.shadowRoot?.append(this.template.content.cloneNode(true));
  }
}
customElements.get('my-fetch') ?? customElements.define('my-fetch', Fetch);

declare global {
  interface HTMLElementTagNameMap {
    'my-fetch': Fetch;
  }
}
