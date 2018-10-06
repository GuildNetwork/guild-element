import { LitElement } from '@polymer/lit-element/lit-element.js';
export { html } from '@polymer/lit-element/lit-element.js';
export { TemplateResult } from 'lit-html/lit-html.js';
export { property } from '@polymer/lit-element/lib/decorators';
import { customElement } from '@polymer/lit-element/lib/decorators';

export class GuildElement extends LitElement {
  /**
   * Get element with specified ID in the element's shadow root
   * @param id Id of element
   */
  $(id: string): HTMLElement {
    return this.shadowRoot!.querySelector(`#${id}`) as HTMLElement;
  }

  /**
   * Find first element macthing the slector in the element's shadow root.
   * @param selector query selector string
   */
  $$(selector: string): HTMLElement {
    return this.shadowRoot!.querySelector(selector) as HTMLElement;
  }

  /**
   * Find all elements matching the selector in the element's shadow root.
   * @param selector query selector string
   */
  $$All(selector: string): NodeList {
    return this.shadowRoot!.querySelectorAll(selector);
  }

  /**
   * Fires a custom event with the specified name
   * @param name Name of the event
   * @param detail Optional event detail object
   * @param bubbles Optional - if the event bubbles. Default is TRUE.
   * @param composed Optional - if the event bubbles past the shadow root. Default is TRUE. 
   */
  fireEvent(name: string, detail?: any, bubbles: boolean = true, composed: boolean = true) {
    if (name) {
      const init: any = {
        bubbles: (typeof bubbles === 'boolean') ? bubbles : true,
        composed: (typeof composed === 'boolean') ? composed : true
      };
      if (detail) {
        init.detail = detail;
      }
      this.dispatchEvent(new CustomEvent(name, init));
    }
  }
}

export function element(name: string) {
  return customElement(name as any);
}