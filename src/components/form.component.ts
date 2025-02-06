import ItemComponent from "./item.component";
import listComponent from "./list.component";

const formularioItem: HTMLFormElement = document.getElementById('formularioItem') as HTMLFormElement;

formularioItem.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    // const inputItem: HTMLInputElement = inputItem.value.trim();
    const form: HTMLFormElement = e.target as HTMLFormElement;
    const buttonSubmitter: HTMLButtonElement = e.submitter as HTMLButtonElement;
    const inputGetItem: HTMLInputElement =form?.elements[0] as HTMLInputElement;
    
    if (!inputGetItem || !buttonSubmitter) return;
    
    try {
        const itemName: string = inputGetItem.value.trim();
        const item: HTMLLIElement = ItemComponent.create(itemName);

        form.reset();        
        
        listComponent.updateList(item)
    } catch (error) {
        
    }
});