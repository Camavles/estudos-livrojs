/* 
Crie um programa que encontre o maior número em um array
FOR é um laço de repetição; ele não é específico para listas
sintaxe
for(let i = 0; i <= 10; i++) {
    faça
}

--> FOR OF é específico para percorrer listas
for(numero of numeros )
*/

/* explicando o loop para mim mesma: o meu loop vai percorrer a minha array. Eu inicializei duas variáveis: uma que recebe uma array e outra que recebe um variável qualquer para fazer a checagem; 
A cada loop, se meu numero na posição i de numeros[i] for maior que maiorNumero; eu armazeno esse número na posição i no meu maiorNumero; se não, meu maiorNumero segue sendo ele mesmo. */



function verificar(array) {

    let numeros = array
    let maiorNumero = 0;

    for (let i = 0; i <= numeros.length; i++) {

        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]
        } else {
            maiorNumero = maiorNumero;
        }

    }

    console.log(maiorNumero)

}



verificar([120, 1, 36, 45, 230])





