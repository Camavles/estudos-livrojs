/* 

Espressões Regulares: RegExp.
Utilizadas para fazer buscas em strings. Verificando se o padrão buscado corresponde existe na string buscada

*/

//.match() --> Ao usar o match sem paramtro e diretamente, ele retorna uma array dom string vazia
//


let frase = "hello world";
let buscar = /hello/

let encontre = /^hello/.test(frase)
// return true

let ache = frase.match(buscar)
// return [ 'hello', index: 0, input: 'hello world', groups: undefined ]


// como encontrar uma sequencia númerica dentro de uma string, para identificar telefone

/* 
\d: representa um caractere que é um dígito numérico (0-9).
{3}: indica que o elemento anterior (no caso, o \d) deve aparecer exatamente 3 vezes.
(): cria um grupo de captura, que pode ser acessado posteriormente através do método match().
-: representa o caractere "-" literal, que deve aparecer exatamente duas vezes na string.

*/
let tel = "Meu número é 123-456-7899";
let verifica = /(\d{3})-(\d{3})-(\d{4})/
/* 
[
  '123-456-7899', // elemento 0
  '123', // elemento 1
  '456', // elemento 2
  '7899', // elemento 3
  index: 13, // começa em 13
  input: 'Meu número é 123-456-7899', // a entrada de daddos
  groups: undefined
]
*/

// expressão para achar um tel com ddd números-números que segem esse padrão 
let meuTel = "Meu tel é 11 25039-1337"
let expressao = /(\d{2}) (\d{5})-(\d{4})/
let mostre = meuTel.match(expressao)

// esse acesse mostra o primeiro elemento da array, que é o meu número
let acesse = mostre[0]


console.log(acesse)



