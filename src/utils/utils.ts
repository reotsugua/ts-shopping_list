export function clearMessage(): void {
    const mensagemVazia: HTMLSpanElement = document.querySelector('.empty-message') as HTMLSpanElement;
    mensagemVazia && mensagemVazia.remove();
}