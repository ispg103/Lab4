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
            const rmCard = this.ownerDocument.createElement("my-card") as Card;
            rmCard.setAttribute(Attribute.name, card.name);
                this.List.push(rmCard);
        });
        this.render(this.List);
    }

    render(List:any) {
        const rmCards = this.ownerDocument.createElement("section")
        rmCards.className = "rmSection"
        this.List.forEach((rmCard) => {
            rmCards.appendChild(rmCard)
        });
        this.shadowRoot?.appendChild(rmCards);
    }
}

customElements.define("app-container", AppContainer);