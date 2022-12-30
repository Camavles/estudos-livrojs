function calcularPromocao() {
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outValor = document.getElementById("outValor");


    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);
    var arredonda = Math.floor(preco)
    var resultado = (arredonda * 2)

    outValor.textContent = "Promoção de " + medicamento + " Leve 2 por apenas R$ " + resultado.toFixed(2)
    
}



var btCalcular = document.getElementById("btMostrarPromocao")
btCalcular.addEventListener("click", calcularPromocao)