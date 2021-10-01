function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  //console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O serultado em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

// Caso faça algo, e de errado. Chame ele no console.log