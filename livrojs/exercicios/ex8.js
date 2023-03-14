/* 
Crie um programa que converta graus Celsius em Fahrenheit
*/
// °C x 9 ÷ 5 + 32

function converter(a) {
    

    let grausC = a
    let grausF = grausC * (9/5) + 32

    console.log(grausF)
}

converter(60)