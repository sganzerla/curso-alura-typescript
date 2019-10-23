export function timerButtonThrottle(tempo: number) {

    // target: instancia na qual o método tem o decorator
    // propertyKey: nome da função
    // descriptor: sabe tudo sobre o método permite reescrevelo
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let timer = 0;
        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {
            // evita recarregamento da pagina após o evento
            if (event) event.preventDefault();

            // zera timer
            clearInterval(timer);
            // timer de 1s
            timer = setTimeout(() => {
                metodoOriginal.apply(this, args);
            }, tempo);

        }
        return descriptor;
    }
}