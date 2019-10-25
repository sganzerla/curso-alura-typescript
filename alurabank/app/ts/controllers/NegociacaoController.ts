import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacoes, Negociacao, NegociacaoParcial } from "../models/index";
import { logarTempoDeExecucao, domInject, timerButtonThrottle } from "../helpers/decorators/index";
import { NegociacaoService, ResponseHandler } from "../service/index";
import { imprime } from "../helpers/index";

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView');
    private _service = new NegociacaoService();

    constructor() {
        // buscar elementos do dom no construtor é um desperdício de recursos.
        // this._inputData = $('#data');
        // this._inputQuantidade = $('#quantidade');
        // this._inputValor = $('#valor');


        this._negociacoesView.update(this._negociacoes);
    }

    // @logarTempoDeExecucao(true)
    @timerButtonThrottle(400)
    adiciona(event: Event): void {

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis por favor.');
            return;
        }


        const negociacao = new Negociacao(
            // converte formato string para date substituindo hífen pela vírgula
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );



        this._negociacoes.adiciona(negociacao);

        imprime(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @timerButtonThrottle(500)
    importaDados() {

        const isOk: ResponseHandler = (res: Response) => {
            if (res.ok) return res;
            throw new Error(res.statusText);
        }

        this._service.obterNegociacoes(isOk)
            .then(negociacoes => negociacoes.forEach(negociacao =>
                this._negociacoes.adiciona(negociacao)));

        this._negociacoesView.update(this._negociacoes);

    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}