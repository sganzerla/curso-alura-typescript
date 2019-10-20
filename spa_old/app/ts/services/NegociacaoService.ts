import { Negociacao } from '../models/index';
export class NegociacaoService {

    async obterNegociacoes(handler: HandlerFunction) {

        try {
            const res_1 = await fetch('http://localhost:8080/dados');
            const res_2 = handler(res_1);
            const dados = await res_2.json();
            return dados.map((dado: { vezes: number; montante: number; }) => new Negociacao(new Date(), dado.vezes, dado.montante));
        }
        catch (err) {          
        }
    }
}

export interface HandlerFunction {

    (res: Response): Response
}