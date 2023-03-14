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

function verificarPrimo() {

  let numero = 0;
  if (numero <= 1) {
    console.log("Não é número primo")
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      console.log("Não é número primo")
    } else {
      console.log("É número primo")
    }
  }

  

}

verificarPrimo(49)