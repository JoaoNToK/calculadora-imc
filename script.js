// Selecionando o formulário
const form = document.getElementById("form-imc");

// Ouvindo o evento de envio
form.addEventListener("submit", function (event) {
  event.preventDefault(); // evita recarregar a página

  // Pegando os valores
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  // Validações
  if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
    mostrarResultado("⚠️ Por favor, insira valores válidos.");
    return;
  }

  // Cálculo do IMC
  const imc = peso / (altura * altura);

  // Classificação
  let classificacao = "";

  if (imc < 18.5) classificacao = "Magreza";
  else if (imc < 25) classificacao = "Normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else if (imc < 35) classificacao = "Obesidade grau I";
  else if (imc < 40) classificacao = "Obesidade grau II";
  else classificacao = "Obesidade grau III";

  // Exibir resultado
  mostrarResultado(
    `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${classificacao}).`
  );
});

// Função para mostrar texto no HTML
function mostrarResultado(mensagem) {
  const divResultado = document.getElementById("resultado");
  divResultado.innerHTML = mensagem;
}
