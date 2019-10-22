export function logarTempoDeExecucao(emSegundos: boolean = false) {
    // target: instancia na qual o método tem o decorator
    // propertyKey: nome da função
    // descriptor: sabe tudo sobre o método permite reescrevelo
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {
            let unidade = 'ms';
            let divisor = 1;
            if (emSegundos) {
                unidade = 's';
                divisor = 1000;
            }
            console.log('----------------------');
            const t1 = performance.now();

            console.log(`parametros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O retorno do método ${propertyKey}: ${JSON.stringify(retorno)}`);
            console.log(`O método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
            return retorno;
        }
        return descriptor;
    }
}