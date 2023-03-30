import styles from './card.css';

export enum Attribute {
    "name" = "name",
    "gender" = "gender",
    "status" = "status",
}

class Card extends HTMLElement {
    name?: string;
    gender?: string;
    status?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            gender: null,
            name: null,
            status: null,
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

    attributeChangedCallback(
        propName: Attribute,
        _: string,
        newValue: string
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <style>
                ${styles}
                </style>
                
                <section>
                <h1>Name: ${this.name}</h1>
                <b><p class="gender">Gender: ${this.gender}</p></b>
                <p>Status: ${this.status}</p>
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;