var a = 5 % 2 // traz o resto dessa divisão; o nome desse operador é módulo ou rwsto
var b = 7 % 4
var c = 2 ** 10 // exponencial

// o Math.abs(num) --> essa função retorna o valor absoluto de um número, ou seja, se for negativo, vira positivo e se for positivo ele constinua posirivo. 
var d = -5
var demonstrar1 = Math.abs(d)
// console.log(demonstrar1)
// existem funções da classe Math que nos ajudam a realizar outros cálculos como raíz quadrada, seno, cosseno etc.

// --------------------------------

// o Math.ceil(num) --> essa função arredonda o valor para cima. Dessa forma se o valor possuir decimais, ele retorna o próximo número inteiro do valor analisado.
var e = 4.2
var demonstrar2 = Math.ceil(e)
// console.log(demonstrar2)

// ---------------------------------
// o Math.floor(num) --> essa função arredonda o valor para baixo retornando a parte inteira do número.
var f = 7.9
var demonstrar3 = Math.floor(f)
// console.log(demonstrar3)

// ----------------------------------
// Math.pow(base, expoente) --> essa função retorna uma base elevada ao expoente.
var g = 4
var demonstrar4 = Math.pow(g, 2)
// posso fazer assim como eu fiz ou posso passar os números direto. 
// console.log(demonstrar4)

// ----------------------------------
// Math.random() --> essa função retorna um número aleatório entre 0 e 1, com várias casas decimais. Onúmeor aleatório inicia em 0 e vai até um valor inferior a 1.
var h = Math.random()
// console.log(h)

// -----------------------------------
// Math.round(num) --> essa função arredonda o valor para o inteiro mais próximo. A partir de .5 na parte fracionária, o valor é arredondado para cima. Anterior a .5 é arredondado para baixo. 
var i = Math.round(2.7)
var j = Math.round(2.4)
var k = Math.round(2.5)
// no caso da letra k, ele é arredondado para cima, pois é a partir de .5
// console.log(i, j, k)

// ---------------------------------------
// Math.sqrt(num) --> essa função retorna a raiz quadradao do número (square root)
var l = Math.sqrt(16)
// console.log(l)

// ---------------------------------------
//Observação sobre operadores. As dunções matemática têm prioridade sobre os demais operadores aritméticos.
var m = Math.sqrt(9) * 8/2
// neste caso fica assim:
// raiz quadrada de 9 = 3 
// 3 * 8 = 24; e depois 24 / 2
// console.log(m)

// ---------------------------------
// os operadores de módulo, multiplicação e divisão tem prioridade sobre adição e subtração.
// tal como na vida real 

// --------------------------------------
// expresão que contenha operadores do mesmo nível de hierarquia, o resultado é calculado da esquerda para a direita.

// no mais, posso usar o alert para ver a saída de algumas dessas funções
// {/* <script>
    // var  = 10 / 2 * Math.sqrt(9) - 4;
    // alert(x);
// </script> */}
