type = "text/javascript";
function sortearNumeros() {
  // cria um array com os números de 1 a 60
  var numeros = Array.from(Array(60).keys(), (n) => n + 1);
  // embaralha os números
  numeros = numeros.sort(() => Math.random() - 0.5);

  // seleciona os 6 primeiros números sorteados
  var numerosSorteados = numeros.slice(0, 6);

  // exibe os números sorteados na tela
  document.querySelector(".numeros-sorteados").innerHTML =
    "Números sorteados: " + numerosSorteados.join(", ");
}
