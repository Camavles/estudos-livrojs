function calcularPreco() {

    var precoKg = document.getElementById("inPrecoKg")
    var inconsumo = document.getElementById("inConsumoGr")
    var outValor = document.getElementById("outValor")

    var quilo = Number(precoKg.value)
    var consumo = Number(inconsumo.value)

    var calcule = (quilo / 1000) * consumo

    outValor.textContent = "Valor a pagar R$ " + calcule.toFixed(2);
}

var btCalcular = document.getElementById("btCalcularPreco")
btCalcular.addEventListener("click", calcularPreco)