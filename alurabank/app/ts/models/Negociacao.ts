import { Imprimivel } from "./index";

export class Negociacao implements Imprimivel {

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

}
