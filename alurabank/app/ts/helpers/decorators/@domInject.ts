export function domInject(seletor: string) {

    // injeta os elementos do DOM dentro das propriedades da classe
    // buscando-os apenas quando forem usados pela primeira vez
    // técnica lazyloading
    return function (target: any, key: string) {
        let elemento: JQuery;
        // 
        const getter = function () {
            if (!elemento) {
                console.log(`Buscando  ${seletor} para injetar em  ${key}`);
                elemento = $(seletor);
            }
            return elemento;
        }
        Object.defineProperty(target, key, {
            get: getter
        });

    }
}