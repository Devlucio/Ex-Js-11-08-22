O `forEach` facilita muito quando precisamos iterar sobre elementos como o `array`. Imagine que estamos em um restaurante e chegou 5 pedidos do aplicativo, esses pedidos devem ser exibidos na tela do chef, vamos ver como ficaria usando o `for`
    
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