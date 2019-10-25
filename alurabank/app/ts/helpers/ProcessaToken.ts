// Union Types: na váriavel de parâmetro ou no retorno do método podem ser declarados mais de um tipo ao mesmo tempo
function processaToken(token: string | number) {

    if (typeof (token) === 'string') {

        // typescript entende que é o tipo string e faz autocomplete para este tipo. A função replace só existe em string
        return token.replace(/2/g, 'X');
    } else {
        // toFixed só existe em number!
        return token.toFixed().replace(/2/g, 'X');
    }
}

