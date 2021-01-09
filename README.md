# reactjs-movies

> Esse projeto foi feito para fins de estudo.

## Instalando e executando o projeto

```bash
$ npm i && npm run dev
```

## Pacotes, tecnologias e conceitos utilizados:

- Clean Architecture
- SOLID principles
- Design Patterns (Dependecy Injection, Factory...)
- Clean Code
- ReactJS (with Typescript)
- Redux + Saga
- Styled Components
- SASS
- Jest
- Husky
- CommitLint
- ESLint
- Prettier
- Webpack
- And more...

### Clean Architecture:

> Notas de estudo sobre clean architecture...

> 4 - **Domain:** Visa prover toda a regra de negócio da aplicação a partir de _interfaces_. Exemplo Sua autenticação precisa de uma entrada (login e senha), e retorna um Access Token.

> 3 - **Data:** Visa prover as implementações dos seus casos de uso (use cases) usando as interfaces do _Domain_. Também pode conter interfaces para abstrações de implementação, como o `HttpClient`, que é uma interface, para uso de requisições http.

> 2 - **Infra (infraestructure):** Visa prover as implementações de tudo que for framework geralmente externos. Como exemplo temos a implementação do Protocolo Http, usando a interface do `HttpClient` fornecida na camada _Data_. Como exemplo nesse caso usando a biblioteca externa `axios` onde o resultado é a implementação: `AxiosHttpClient`

> 1 - **Presentation:** Geralmente utilizado para prover um _"ViewModel"_, uma camada de formatação de dados para apresentação e utilização em seu frontend, que nesse caso, estaria em uma outra chamada geralmente chamada de _UI (user interface)_. Neste repositório, como estamos utilizando do _React_, a primeiro momento, para não perder a flexibilidade, vamos manter dentro da camada _Presentation_ também nossa _UI_. Essa camada pode depender apenas da camdada de _Domain_.

> 0 - **Main:** Essa é a camada de ponto de entrada (apontado no webpack). É a única camada que depende de tudo, e que é responsável por usar do recurso fornecidos em outras camadas para através de _Design Patterns_ fornecer recursos. Todas implementações feitas, serão utilizando injeção de dependencia, para que seja o mais desacoplado possível. Ou seja, para usar a tela de `Login`, preço que ele injete todas as dependencias (pattern dependency injection) que essa classe necessita para que ela funcione.
