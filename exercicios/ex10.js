/* 

Crie um programa que imprima os números ímpares de 1 a 100
*/



function verificar() {

    for(let i = 1; i<= 100; i++) {
        if(i % 2 != 0) {
            console.log("Número ímpar " + i)
        } else {
            i = i
        }
    }
    
}

verificar()