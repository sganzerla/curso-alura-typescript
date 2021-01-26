# curso-alura-typescript

## Pré-requisitos

- NodeJS 12
- CLI Angular

## Configurando Prettier no projeto

1) Instale no nosso projeto utilizando o comando:

```
npm install --save-dev prettier
```

2) Instale os seguintes pacotes de desenvolvimento:

```
npm install --save-dev tslint-config-prettier
npm install --save-dev tslint-plugin-prettier
```

3) No arquivo tslint.json, coloque a seguinte configuração no atributo extends:

"extends": ["tslint:recommended", "tslint-plugin-prettier", "tslint-config-prettier"]