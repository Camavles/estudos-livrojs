##  Integração JavaScript e HTML


      OBJETIVOS:

O objetivo desse repositório é ter, de forma resumida, os meus estudos sobre JavaScript e HTML e a integração entre ambos.

      PASTAS E ARQUIVOS:

As pastas e arquivos estão relacionados ao conteúdo do livro Lógica de Programação e Algoritmos com JavaScript.

      CONTEÚDO:
      

#### Métodos:

```js
var a = 5 % 2 // traz o resto dessa divisão; o nome desse operador é módulo ou resto
var b = 7 % 4
var c = 2 ** 10 // exponencial
```

- `Math.abs(num) → essa função retorna o valor absoluto de um número, ou seja, se for negativo, vira positivo e se for positivo ele continua positivo.`
```js 
var d = -5
var demonstrar1 = Math.abs(d)
console.log(demonstrar1) // return 5
// existem funções da classe Math que nos ajudam a realizar outros cálculos como raíz quadrada, seno, cosseno etc.
```

- `Math.ceil(num) → essa função arredonda o valor para cima. Dessa forma, se o valor possuir decimais, ele retorna o próximo número inteiro do valor analisado.`
```js
var e = 4.2
var demonstrar2 = Math.ceil(e)
console.log(demonstrar2) // return 5
```

- `Math.floor(num) → essa função arredonda o valor para baixo retornando a parte inteira do número.`
```js
var f = 7.9
var demonstrar3 = Math.floor(f)
console.log(demonstrar3) // return 7
```


- `Math.pow(base, expoente) → essa função retorna uma base elevada ao expoente.`
```js
var g = 4
var demonstrar4 = Math.pow(g, 2)
// posso fazer assim como eu fiz ou posso passar os números direto. 
console.log(demonstrar4) // return 16
```


- `Math.random() → essa função retorna um número aleatório entre 0 e 1, com várias casas decimais. O número aleatório inicia em 0 e vai até um valor inferior a 1.`
```js
var h = Math.random()
console.log(h) // return 0.8288357151454384
```

- `Math.round(num) → essa função arredonda o valor para o inteiro mais próximo. A partir de .5 na parte fracionária, o valor é arredondado para cima. Inferior a .5 é arredondado para baixo.`
```js
//  -->  
var i = Math.round(2.7)
var j = Math.round(2.4)
var k = Math.round(2.5)
// no caso da letra k, ele é arredondado para cima, pois é a partir de .5
console.log(i, j, k) // return 3 2 3
```

- `Math.sqrt(num) → essa função retorna a raiz quadrada do número (square root)`
```js
//  --> 
var l = Math.sqrt(16)
console.log(l) // return 4
```

- `Observação sobre operadores. As funções matemáticas têm prioridade sobre os demais operadores aritméticos.`
```js
var m = Math.sqrt(9) * 8/2
// neste caso fica assim:
// raiz quadrada de 9 = 3 
// 3 * 8 = 24; e depois 24 / 2
console.log(m) // return 12
```

#### EXPRESSÕES REGULARES:

/* 
Espressões Regulares: RegExp.
Utilizadas para fazer buscas em strings. Verificando se o padrão buscado corresponde existe na string buscada
*/

- `.match() → essa expressão verifica se o parametro passado na variável buscar tem correspondência na string passada`
```js
let frase = "hello world";
let buscar = /hello/
let ache = frase.match(buscar)
console.log(ache)// return [ 'hello', index: 0, input: 'hello world', groups: undefined ] 
```

- `Outras formas de usar o .match()` 
```js
/* como encontrar um padrão númerico na minha string: 
\d: representa um caractere que é um dígito numérico (0-9).
{3}: indica que o elemento anterior (no caso, o \d) deve aparecer exatamente 3 vezes.
(): cria um grupo de captura, que pode ser acessado posteriormente através do método match().
-: representa o caractere "-" literal, que deve aparecer exatamente duas vezes na string.

*/
let tel = "Meu número é 123-456-7899";
let verifica = /(\d{3})-(\d{3})-(\d{4})/
let mostrar = tel.match(verifica)
console.log(mostrar) 
/* 
return 
[
  '123-456-7899', // elemento 0
  '123', // elemento 1
  '456', // elemento 2
  '7899', // elemento 3
  index: 13, // começa em 13
  input: 'Meu número é 123-456-7899', // a entrada de daddos
  groups: undefined
]
Obs: como o retorno é uma array, eu consigo acessar o número, como string, no primeiro elemento.
*/
```

- `Usando o .match() para separar cada palavra dentro de uma string` 
```js
/*
Explicação: pegue tudo que está nos colchetes, palavras com letras minúsculas a-z.
palavras com letras maiúsculas A-Z.
ignore todas os acentos do alfabeto latino \u00C0-\u017F de forma global e insensitive. 
*/

let frase = "Olá meu nome é Anjo"
let separa = frase.match(/[a-zA-Z]+/gi)
let separaEMostraAcentos = frase.match(/[a-zA-Z\u00C0-\u017F]+/gi)

console.log(separa) // return [ 'Ol', 'meu', 'nome', 'Anjo' ]
console.log(separaEMostraAcentos) // return [ 'Olá', 'meu', 'nome', 'é', 'Anjo' ]
```