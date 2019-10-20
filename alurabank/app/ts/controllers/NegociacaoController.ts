class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {
        // document.querySelector busca elemento do DOM da página
        // casting convertendo mais generico para mais específico
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event: Event) {

        // impedir o carregamento da página após o evento
        event.preventDefault();

        const negociacao = new Negociacao(
            // converte formato string para date substituindo hífen pela vírgula
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
        console.log(negociacao);
    }
}
