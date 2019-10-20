class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        // impedir o carregamento da página após o evento
        event.preventDefault();
        const negociacao = new Negociacao(
        // converte formato string para date substituindo hífen pela vírgula
        new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}
