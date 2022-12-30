function calcularValor() {
    var inValorMin = document.getElementById("inValorMin")
    var inTempo = document.getElementById("inTempoCliente")
    var outValor = document.getElementById("outValor")

    var valorTempo = inValorMin.value;
    var tempoUso = inTempo.value;

    var calcularTempoMin = Number(valorTempo) 
    var calcularTempoUso = Number(tempoUso) 

    var resultado = (calcularTempoUso / 15) * calcularTempoMin

    outValor.textContent = "Valor a Pagar R$ " + resultado.toFixed(2) 
}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularValor)


// refazer depois
