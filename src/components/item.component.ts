import Armazenamento from "../service/item.service";
import Item from "../types/Item";

let arrItens: Item[] = Armazenamento.getItens() || [];

const htmlItem = (novoItem: Item): HTMLLIElement => {
    const listItem: HTMLLIElement = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = novoItem.nome;

    return listItem as HTMLLIElement;
}


const ItemComponent = {
    create: (nomeItem: string) => {
        arrItens = Armazenamento.getItens();
        const novoItem: Item = {
            id: new Date().toISOString(),
            nome: nomeItem,
        };

        arrItens.push(novoItem);
        Armazenamento.updateItens(arrItens);
        return htmlItem(novoItem);
    },
    render: (itemArmazenado: Item): HTMLLIElement => htmlItem(itemArmazenado),
}

export default ItemComponent;   