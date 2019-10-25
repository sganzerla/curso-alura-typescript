import { Imprimivel } from "./Imprimivel"; 
import { MeuObjeto } from "./MeuObjeto";

export class Negociacao implements Imprimivel, MeuObjeto<Negociacao> {


    // para impedir que o valor de uma propriedade seja alterado depois de gerado pelo construtor
    // deve-se substituir modificar de acesso private por readonly 
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {

    }

    get volume() {
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log('');
        console.log(
            `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Volume: ${this.volume}
            `
        );
    }

    ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getDay() == negociacao.data.getDay();
    }

}
