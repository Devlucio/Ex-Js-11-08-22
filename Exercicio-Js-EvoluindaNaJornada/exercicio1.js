const minhaPromise = new Promise((resolve, reject) => {});


1. Uma promessa em JavaScript é exatamente o que parece - você a usa para fazer uma promessa de fazer algo, geralmente de forma assíncrona. Quando a tarefa for concluída, você cumprirá sua promessa ou deixará de fazê-lo. `Promise`é uma função construtora, então você precisa usar a `new`palavra-chave para criar uma. Leva uma função, como seu argumento, com dois parâmetros - `resolve`e `reject`. Esses são métodos usados para determinar o resultado da promessa. A sintaxe fica assim:

```jsx
const minhaPromise = new Promise((resolve, reject) => {});
```

Crie uma nova promessa chamada `fazChamadaServidor`. Passe uma função com parâmetros `resolve`e para o `reject`.