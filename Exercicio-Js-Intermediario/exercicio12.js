//setup imprimir os pares
const valoresNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let indice = 0; indice < valoresNum.length; indice = indice +1) {
    const valorAtual = valoresNum[indice];
    if (valoresNum[indice] % 2 === 0) {
        console.log(valorAtual)
    }
    
};
