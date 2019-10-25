import { Negociacao } from "./Negociacao";
import { MeuObjeto } from "./MeuObjeto";
export class Negociacoes implements MeuObjeto<Negociacoes> {


    paraTexto(): void {
        console.log(JSON.stringify(this._negociacoes));
    }

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}
