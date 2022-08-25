1. Uma promessa em JavaScript é exatamente o que parece - você a usa para fazer uma promessa de fazer algo, geralmente de forma assíncrona. Quando a tarefa for concluída, você cumprirá sua promessa ou deixará de fazê-lo. `Promise`é uma função construtora, então você precisa usar a `new`palavra-chave para criar uma. Leva uma função, como seu argumento, com dois parâmetros - `resolve`e `reject`. Esses são métodos usados para determinar o resultado da promessa. A sintaxe fica assim:

```jsx
const minhaPromise = new Promise((resolve, reject) => {});
```

Crie uma nova promessa chamada `fazChamadaServidor`. Passe uma função com parâmetros `resolve`e para o `reject`.

1. As promessas são mais úteis quando você tem um processo que leva um tempo desconhecido em seu código (ou seja, algo assíncrono), geralmente uma solicitação do servidor. Quando você faz uma solicitação ao servidor, leva algum tempo e, após a conclusão, você geralmente deseja fazer algo com a resposta do servidor. Isso pode ser alcançado usando o `then`método. O `then`método é executado imediatamente após sua promessa ser cumprida com `resolve`. Aqui está um exemplo:

```
myPromise.then(result => {});
```

`result`vem do argumento dado ao `resolve`método.

Adicione o `then`método à sua promessa. Use `result`como parâmetro de sua função de retorno de chamada e registre `result`-se no console.

```jsx
const chamadaServidor = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let resposta = true;
    
  if(resposta) {
    resolve("Os dados foram recebidos com sucesso");
  } else {  
    reject("Data não recebidos");
  }
});
```

1. Sabemos que no dia-a-dia como pessoas programadoras é muito mais comum que utilizemos as Promises para lidar com requisições externas, ou seja, para algum servidor como o nosso backend, por exemplo. Na aula, vimos que podemos utilizar um recurso de Javascript chamado fetch para realizar essas requisições externas enviando apenas a url delas, como no exemplo abaixo:

```jsx
fetch('https://api.github.com/users/othergabs')
    // Tratamento do sucesso
    .then(response => response.json())  // converter para json
    .then(json => console.log(json))    //imprimir dados no console
    .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch
```

Faça uma função que realize uma chamada para listar todas as raças de cachorro do mundo através do endereço `https://dog.ceo/api/breeds/list/all`. 

- Imprima no console apenas as raças que possuem sub raças.
- Imprima no console apenas as raças que não possuem sub raças.

1. Agora que você sabe utilizar promises, converta a implementação dessa promise para utilizar async/await.

```jsx
//exemplo

await function minhaFuncao() {
	const response = await minhaPromise()
}
```

```jsx
function obterUsuarioGit(name) {
  return fetch(`https://api.github.com/users/${name}`)
		.then(response => response.json())
    .then(user => {
      alert(`Nome completo: ${user.name}.`);
      return user;
    })
    .catch(err => {
      alert('Usuário não encontrado!')
    });
}

obterUsuarioGit(name);
```