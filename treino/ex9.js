/* 
Crie um programa que verifique se um número é primo
*/


// function verificar() {

//     for(let i = 0; i <= 10; i++) {
//         if(i % 2 != 0 || i == 2) {
//             console.log("Número primo " + i)
//         } else {
//             i = i
//         }
//     }
// }

// verificar()

function verificarPrimo(numero) {

    if (numero <= 1) {
      return false;
    }
    
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
}

verificarPrimo(17)