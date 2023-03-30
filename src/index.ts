import "./components/index";
import {getapi} from "./components/data"
import Card, { Attribute } from "./components/card/card"

class AppContainer extends HTMLElement {
    rickandmorty: Card[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const dataRM = await getapi();
        dataRM.forEach((data: any) => {
            console.log(data);
        });

        dataRM.forEach((data: any) => {
            const rickandmortyCard = this.ownerDocument.createElement("my-card") as Card;
            rickandmortyCard.setAttribute(Attribute.name, data.results.name);
            rickandmortyCard.setAttribute(Attribute.status, data.results.status);
            rickandmortyCard.setAttribute(Attribute.gender, data.results.gender);
                this.rickandmorty.push(rickandmortyCard);
        });
        this.render(this.rickandmorty);
    }

    render(rickandmorty:any) {
        const rickandmortyCards = this.ownerDocument.createElement("section")
        rickandmortyCards.className = "RMSection"
        this.rickandmorty.forEach((rickandmortyCard) => {
            rickandmortyCards.appendChild(rickandmortyCard)
        });
        this.shadowRoot?.appendChild(rickandmortyCards);
    }
}

customElements.define("app-container", AppContainer);