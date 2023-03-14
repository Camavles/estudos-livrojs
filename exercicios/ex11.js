/* Escreva uma função que receba um array de strings e retorne a string mais longa. */

// RegExp para encontrar a maior palavra de uma string
// .match(/[a-z/gi)
// g é de global e i é de insensitive, então posso por letras maisculas
// ao adicionar o +, ele retorna as palavras separadas




function longestWord(sen) {

    let arr = sen.match(/[a-zA-Z]+/gi)

    let sorted = arr.sort(function(a, b) {
        return b.length - a.length
    });

    sen = sorted[0]

    console.log(sen)

    return sen


}


longestWord("i love you")






