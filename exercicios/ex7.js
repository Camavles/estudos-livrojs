/* 

Crie um programa que verifique se uma palavra é um palíndromo

// a contagem começa em zero, apesar dele saber que há 3 elementos, por isso o -1:

let acesseUltimaLetra = a[extensao - 1]

*/

// depois verificar

function mostrar(a) {

let palavra = a.toLowerCase();

let invertida = "";

for(let i = palavra.length - 1; i >=0; i--) {
    invertida += palavra[i]
}


if (palavra === invertida) {
    console.log(palavra + " é palíndromo")
} else {
    console.log(palavra + " não é palíndromo")
}


}

mostrar("Ana");