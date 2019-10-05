class NegociacaoController {

    private _inputData:any;
    private _inputQuantidade:any;
    private _inputValor:any;

    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    adiciona(event:any) {

        event.preventDefault();

        const negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negociacao.quantidade + 20);
    }
}
