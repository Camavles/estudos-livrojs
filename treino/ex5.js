/* Crie um programa que encontre o menor número em um array.*/

function encontrar(array) {

    let numeros = array

    let menorNumero = 9999999999;

    for (let i = 0; i <= numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i]
        } else {
            menorNumero = menorNumero
        }
    }

    console.log(menorNumero)

}


encontrar([20000, 30, 60, 70, 0])