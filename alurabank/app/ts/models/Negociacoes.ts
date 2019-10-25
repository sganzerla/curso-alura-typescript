import { Imprimivel } from "./Imprimivel";
import { Negociacao } from "./Negociacao";
export class Negociacoes implements Imprimivel {
    
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

}
