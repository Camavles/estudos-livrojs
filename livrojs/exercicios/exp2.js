// expressão --> match(/[a-zA-Z]+/gi)

// essa expressão ajuda a separar uma string grande várias palavras em várias strings, colocando tudo em uma array.


let frase = "Olá meu nome é Anjo"

let separa = frase.match(/[a-zA-Z]+/gi)
let separaEMostraAcentos = frase.match(/[a-zA-Z\u00C0-\u017F]+/gi)

console.log(separa)
console.log(separaEMostraAcentos)


const nome = "Camila";
let idade = "16";
var sobrenome = "Silva"
//console.log(nome[0])