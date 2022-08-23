const pedidos = [
    { id: 1, prato: "x-bacon", status: "em preparo" },
    { id: 2, prato: "sundae", status: "entregue" },
    { id: 3, prato: "fritas média", status: "entregue" },
    { id: 4, prato: "nuggets", status: "em preparo" },
    { id: 5, prato: "x-tudo", status: "n/a" },
  ];

  pedidos.forEach((pedido) => {
    if(pedido.status === "em preparo") {
        console.log("Seu pedido está sendo preparado")
    } else if (pedido.status === "a caminho"){
        console.log("Entregador a caminho, fique atento!");
    } else if (pedido.status === "entregue"){
        console.log("Pedido entregue");
    } else {
        console.log("Aguarde, processando pedido...")
    } 
});