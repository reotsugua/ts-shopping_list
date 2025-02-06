import Armazenamento from "../service/item.service";
import Item from "../types/Item";
import { clearMessage } from "../utils/utils";
import ItemComponent from "./item.component";

const listaItens: HTMLUListElement = document.getElementById('listaItens') as HTMLUListElement;


(function rederizarLista(): void {
    if (!listaItens) return;

    let arrItens: Item[] = Armazenamento.getItens() || [];
    if (arrItens.length === 0) return; 
    listaItens.innerHTML = "";
    clearMessage();  

    const fragment = document.createDocumentFragment();

    arrItens.forEach(itemArmazenado => {
        const item: HTMLLIElement = ItemComponent.render(itemArmazenado)
        // item.onclick = () => {console.log("Clicou", itemArmazenado.id)};
        fragment.appendChild(item);
    });

    listaItens.appendChild(fragment);
})()

function atualizarList(itemComponent: HTMLLIElement) {
    clearMessage();
    listaItens.appendChild(itemComponent);        
}

const listComponent = {
    updateList: (itemComponent: HTMLLIElement) => atualizarList(itemComponent)
};


export default listComponent;