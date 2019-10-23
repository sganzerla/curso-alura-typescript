import { NegociacaoParcial, Negociacao } from "../models/index";

export class NegociacaoService {

    obterNegociacoes(handler: ResponseHandler): Promise<Negociacao[]> {

        return fetch('http://localhost:80480/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch((err) => {
                console.log(err);
                throw new Error(`Erro ${err}`);
            });

    }
}

export interface ResponseHandler {

    (res: Response): Response
}