1. Uma maneira fácil de adicionar dados ao final de um *array* é por meio da função `push()`. Basicamente, `.push()`pega um ou mais *parâmetros* e os "empurra" para o final do array.
    
    Exemplos:
    
    ```jsx
    const array = [1, 2, 3];
    array.push(4);
    const novoArray = ["Stimpson", "J", "cat"];
    arr2.push(["happy", "joy"]);
    
    ```
    
    `array` agora tem o valor `[1, 2, 3, 4]`e `novoArray` tem o valor `["Stimpson", "J", "cat", ["happy", "joy"]]`.
    
    Adicione `["cão", 3]` no final da `meusItens`.
    
    ```jsx
    const meusItens = [["Joao", 23], ["gato", 2]];
    ```
    

1. O `forEach` facilita muito quando precisamos iterar sobre elementos como o `array`. Imagine que estamos em um restaurante e chegou 5 pedidos do aplicativo, esses pedidos devem ser exibidos na tela do chef, vamos ver como ficaria usando o `for`
    
    ```jsx
    const pedidos = [
      { id: 1, prato: "x-bacon", status: "em preparo" },
      { id: 2, prato: "sundae", status: "entregue" },
      { id: 3, prato: "fritas média", status: "entregue" },
      { id: 4, prato: "nuggets", status: "em preparo" },
      { id: 5, prato: "x-tudo", status: "n/a" },
    ];
    
    for(var indice = 0; indice < pedidos.length; indice++) {
        console.log(pedidos[indice].prato)
    }
    ```
    
    A mesma implementação com `forEach` ficaria assim, muito mais simples, não?
    
    ```jsx
    pedidos.forEach(function(pedido) {
        console.log(pedido.prato);
    });
    ```
    
    Faça uma função que execute um `forEach` em `pedidos`, que agora tem um status e imprima mensagens ao usuário de acordo com ele. Se:
    
    1. Status for igual a "em preparo", imprima a mensagem "Seu pedido está sendo preparado"
    2. Status for igual a "em preparo", imprima a mensagem "Seu pedido está sendo preparado"
    3. Status for igual a "a caminho", imprima a mensagem "Entregador a caminho, fique atento!"
    4. Status for igual a "entregue", imprima a mensagem "Pedido entregue"
    5. Se não for nenhum desses status, imprima "Aguarde, processando pedido..."
    
2. Manipulando *Arrays* mais uma vez! Aprendemos que podemos manipular os *Arrays* de muitas formas, dentre elas, aprendemos que podemos adicionar e remover itens utilizando 4 métodos diferentes:
    
    > Para adicionar:
    > 
    > 1. `push()`: adiciona o item no final do a*rray*;
    > 2. `unshift()`: adiciona o item no início do *Array*;
    
    > Para remover:
    > 
    > 1. `pop()`: remove o último item do *Array*;
    > 2. `shift()`: remove o primeiro item do *Array*;
    
    Com isso, vamos praticar um pouco mais? Considerando o *Array* criado abaixo, utilize-o para: 
    
    - Adicionar ao final da nossa lista de compras um novo item: café;
    - Remover da nossa lista de compras o primeiro item;
    - Adicionar ao início da nossa lista um novo item: chocolate;
    - Remover da nossa lista o último item;
    
    ```jsx
    let minhaLista = ["bala fini", "suco", "coca-cola", "picanha", "toddynho"]
    ```
    
    Imprima a nova lista de compras ao final de todas as operações.
    

1. Crie uma lista de compras na variável `meusProdutos`. A lista deve ser um A*rray* multi- dimensional contendo vários *subarrays*.
    
    O primeiro elemento em cada sub-matriz deve conter uma string com o nome do item. O segundo elemento deve ser um número representando a quantidade, ou seja,
    
    ```jsx
    	["Camiseta Preta", 15]
    ```
    
    Deve haver pelo menos 5 sub-matrizes na lista, mas atenção:
    
    1. O primeiro item do *subarray* deve ser string;
    2. O segundo item do *subarray* deve ser numérico;
    
2. Em JavaScript, podemos dividir nosso código em partes reutilizáveis chamadas *funções*. Aqui está um exemplo de uma função:
    
    ```jsx
    function minhaFuncao() {
      console.log("Olá mundo!");
    }
    
    ```
    
    Você pode chamar ou *invocar* esta função usando seu nome seguido por parênteses, assim: `minhaFuncao(`) Cada vez que a função é chamada, ela imprimirá a mensagem `Olá mundo!` no console dev. Todo o código entre as chaves será executado toda vez que a função for chamada.
    
    Crie uma função chamada `imprimeSaudacoes` que imprime a string `Olá, colegas!`
    
3. *Parâmetros* são variáveis que atuam como espaços reservados para os valores que devem ser inseridos em uma função quando ela é chamada. Quando uma função é definida, ela normalmente é definida junto com um ou mais parâmetros. Os valores reais que são inseridos (ou *"passados"* ) em uma função quando ela é chamada são conhecidos como *argumentos* .
    
    Aqui está uma função com dois parâmetros, `param1`e `param2`:
    
    ```jsx
    function funcaoComPametros(param1, param2) {
      console.log(param1, param2);
    }
    ```
    
    Crie uma função chamada `minhaSubtracao` que aceite dois argumentos e envie sua soma para o console dev.
    

1. É possível ter variáveis *locais* e *globais com o mesmo nome.* Quando você faz isso, a variável local tem precedência sobre a variável global. Como neste exemplo:
    
    ```jsx
    const acessorio = "Chapeu";
    
    function meuAcessorio() {
      const acessorio = "Touca";
      return acessorio;
    }
    
    ```
    
    A função `meuAcessorio` retornará a string `Touca` porque a versão local da variável está presente. Adicione uma variável local à `minhaRoupa`função para substituir o valor de `roupa` pela string `jaqueta`.
    
    ```jsx
    // Setup
    const roupa = "T-Shirt";
    
    function minhaRoupa() {
      // Altere apenas abaixo dessa linha
    
      // Altere apenas acima dessa linha
      return roupa;
    }
    
    minhaRoupa();
    ```
    
2. Outra função de array útil é  `filter()`, ela chama uma função em cada elemento de um array e retorna um novo array contendo apenas os elementos para os quais essa função retorna `true`. Em outras palavras, ele filtra o array, com base na função passada para ele. Como `map`, ele faz isso sem precisar modificar o array original.
    
    A função de retorno de chamada aceita três argumentos. O primeiro argumento é o elemento atual que está sendo processado. O segundo é o índice desse elemento e o terceiro é o array no qual o `filter`método foi chamado.
    
    Veja abaixo um exemplo usando o `filter`método na `users`matriz para retornar uma nova matriz contendo apenas os usuários com menos de 30 anos. Para simplificar, o exemplo usa apenas o primeiro argumento do retorno de chamada.
    
    ```jsx
    const users = [
      { name: 'John', age: 34 },
      { name: 'Amy', age: 20 },
      { name: 'camperCat', age: 10 }
    ];
    const usersUnder30 = users.filter(user => user.age < 30);
    console.log(usersUnder30);
    
    ```
    
    O console exibiria o valor `[ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]`.
    
    ```jsx
    // Setup
    const filmes = [
      {
        titulo: "A Fuga das Galinhas",
        censura: 10,
        nota: 7.1
      },
      {
        titulo: "Batman",
        censura: 14,
        nota: 8.5
      },
      {
        titulo: "As Branquelas",
        censura: 14,
        nota: 10
      },
      {
        titulo: "Titanic",
        censura: 16,
        nota: 3.2
      },
      {
        titulo: "A Noiva do Chuck",
        censura: 18,
        nota: 2.2
      }
    ]
    
    // mude abaixo dessa linha
    const melhoresFilmes;
    const filmesInfantis;
    
    // não mude acima dessa linha
    console.log(melhoresFilmes)
    console.log(filmesInfantis)
    ```
    
    - Armazene em `melhoresFilmes` apenas os filmes com avaliação igual ou superior a 7;
    - Armazene em `filmesInfantis` apenas os filmes com censura menor ou igual a 14