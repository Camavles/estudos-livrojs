/* 
Crie um programa que calcule a média de um array

Método reduce((acumulador, elemento) => acumulador + elemento)
sintaxe: array.reduce((acumulador, elemento) => acumulador + elemento)

*/


function calcular(array) {

    const conteElementos = array.length;

    let reduz = array.reduce((acumulador, elemento) => acumulador + elemento);

    const calculeMedia = reduz / conteElementos

    console.log(calculeMedia)

}


calcular([100, 20, 30])