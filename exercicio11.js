const meuArray = [];
    let valor = 5;
    
    while (valor >= 0) {
      meuArray.push(valor);
      valor--;
    }
    console.log(meuArray);
1. Um outro loop interessante do Javascript é o `while`, ele é um tipo de loop que executa uma instrução enquanto a condição especificada é verdadeira e para quando essa condição não é mais verdadeira, por exemplo:
    
    ```jsx
    const meuArray = [];
    let valor = 0;
    
    while (valor < 5) {
      meuArray.push(valor);
      valor++;
    }
    ```
    
    No exemplo de código acima, o `while`será executado 5 vezes e acrescentará os números de 0 a 4 a `meuArray`. Vamos tentar fazer com que um loop `while` funcione enviando valores para um array. 
    
    Adicione os números de 5 a 0 (inclusive) em ordem decrescente para `meuArray` usar um `while`loop e imprima-o no final.
    
    ```jsx
    // Setup
    const meuArray = [];
    ```