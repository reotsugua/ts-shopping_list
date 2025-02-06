import Item from "../types/Item";

const salvarItens = (itens: Item[]): void => {
    localStorage.setItem("itens", JSON.stringify(itens));
}

const carregarItens = (): Item[] => {
    const itens: Item[] = JSON.parse(localStorage.getItem("itens") || "[]");
    return itens;
}

const Armazenamento = {
    updateItens(itens: Item[]) {
        salvarItens(itens);
    },
    getItens(): Item[] {
        return carregarItens();
    }
}

export default Armazenamento;