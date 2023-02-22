/* 
Crie um programa que verifique se um número é par ou ímpar.
*/
// a % 2 traz apenas o resto da divisão

function verificar(a) {
    
    if( a % 2 == 0) {
        console.log("Seu número é par")
    } else {
        console.log("Seu número é ímpar")
    }

}

verificar(15)