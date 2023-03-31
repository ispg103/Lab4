import styles from './card.css'

export enum Attribute {
    "name" = "name",
    "icon" = "icon",
}

class Card extends HTMLElement {
    name?: string;
    icon?: string

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            name: null,
            icon: null,
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute, oldValue: undefined, newValue: string){
        switch(propName){
        default:
        this[propName] = newValue;
        this.render();
        break;
        }
        this.render()
    }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <style>
                ${styles}
                </style>

                <section>
                <h1>${this.name}</h1>
                <img src= "${this.icon}"
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;