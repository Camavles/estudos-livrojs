// essa função pega todos os ids..

function converterDuracao() {
    // cria as referências aos documentos da página
    var inTitulo = document.getElementById("inTitulo")
    var inDuracao = document.getElementById("inDuracao")
    var outTitulo = document.getElementById("outTitulo")
    var outResposta = document.getElementById("outResposta")

    // obtem o conteúdo dos campos de entrada
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

    // arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao / 60)

    // obtem o resto da divisão
    var minutos = duracao % 60;

    // altera o conteúdo dos parágrafos de resposta
    outTitulo.textContent = " O filme " + titulo +  " tem ";
    outResposta.textContent = horas + " hora(s) e " + minutos + " minutos(s) ";
}

// cria uma referência ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");

// registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao)