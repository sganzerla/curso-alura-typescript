export function logarTempoDeExecucao() {
    // target: instancia na qual o método tem o decorator
    // propertyKey: nome da função
    // descriptor: sabe tudo sobre o método permite reescrevelo
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {
            // 
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        }
        return descriptor;
    }
}