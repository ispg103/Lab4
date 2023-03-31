import "./components/index";
import {get_api} from "./components/data"
import Card, { Attribute } from "./components/card/card"

class AppContainer extends HTMLElement {
    List: Card[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const data = await get_api();
        data.forEach((data: any) => {
            console.log(data);
        });

        data.forEach((card: any) => {
            const weaponsCard = this.ownerDocument.createElement("my-card") as Card;
            weaponsCard.setAttribute(Attribute.name, card.displayName);
            weaponsCard.setAttribute(Attribute.icon, card.displayIcon);
                this.List.push(weaponsCard);
        });
        this.render(this.List);
    }

    render(List:any) {
        const weaponsCards = this.ownerDocument.createElement("section")
        weaponsCards.className = "weaponsSection"
        this.List.forEach((weaponsCard) => {
            weaponsCards.appendChild(weaponsCard)
        });
        this.shadowRoot?.appendChild(weaponsCards);
    }
}

customElements.define("app-container", AppContainer);