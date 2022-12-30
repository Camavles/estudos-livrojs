function calcularPromocao() {
    var inProduto = document.getElementById("inProduto")
    var inPreco = document.getElementById("inPreco")
    var outValor = document.getElementById("outValor")

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    var item = (preco / 2)
    var resultado = (preco * 2) + item

    outValor.textContent = produto + " - Promoção: Leve 3 por apenas R$ " + resultado.toFixed(2) + ", o 3º Produto custa apenas R$ " + item.toFixed(2)

}

var btCalcular = document.getElementById("btVerPromocao")
btCalcular.addEventListener("click", calcularPromocao)