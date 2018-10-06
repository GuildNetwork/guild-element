import { LitElement } from '@polymer/lit-element/lit-element.js';
export { html } from '@polymer/lit-element/lit-element.js';
export { TemplateResult } from 'lit-html/lit-html.js';
export { property } from '@polymer/lit-element/lib/decorators';
export declare class GuildElement extends LitElement {
    /**
     * Get element with specified ID in the element's shadow root
     * @param id Id of element
     */
    $(id: string): HTMLElement;
    /**
     * Find first element macthing the slector in the element's shadow root.
     * @param selector query selector string
     */
    $$(selector: string): HTMLElement;
    /**
     * Find all elements matching the selector in the element's shadow root.
     * @param selector query selector string
     */
    $$All(selector: string): NodeList;
    /**
     * Fires a custom event with the specified name
     * @param name Name of the event
     * @param detail Optional event detail object
     * @param bubbles Optional - if the event bubbles. Default is TRUE.
     * @param composed Optional - if the event bubbles past the shadow root. Default is TRUE.
     */
    fireEvent(name: string, detail?: any, bubbles?: boolean, composed?: boolean): void;
}
export declare function element(name: string): (clazz: import("@polymer/lit-element/lib/decorators").Constructor<HTMLElement>) => any;
