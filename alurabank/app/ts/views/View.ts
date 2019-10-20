abstract class View<T> {

    protected _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        // propriedade setter do Dom que renderiza um template html recebido
        this._elemento.innerHTML = this.template(model);
    }

    abstract template(model: T): string;
}
