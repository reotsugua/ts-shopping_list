const formularioItem: HTMLFormElement = document.getElementById('formularioItem') as HTMLFormElement;

formularioItem.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log("submiteu");
    
});