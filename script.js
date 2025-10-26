const inputData = document.getElementById("dataNascimento");
const resultado = document.getElementById("resultado");
const botao = document.getElementById("calcular");

botao.addEventListener("click", () => {
  const dataNascimento = inputData.value;

  if (!dataNascimento) {
    resultado.innerText = "Por favor, selecione uma data válida.";
    return;
  }

  // Quebrar a string "YYYY-MM-DD"
  const partes = dataNascimento.split("-");
  const ano = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10) - 1; // janeiro = 0
  const dia = parseInt(partes[2], 10);

  const nascimento = new Date(ano, mes, dia);

  if (isNaN(nascimento.getTime())) {
    resultado.innerText = "Data inválida!";
    return;
  }

  const hoje = new Date();
  hoje.setFullYear(2025);

  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const aniversarioEsteAno = new Date(
    hoje.getFullYear(),
    nascimento.getMonth(),
    nascimento.getDate()
  );

  if (aniversarioEsteAno > hoje) { 
    idade--;
  }

  resultado.innerText = `Em ${hoje.toLocaleDateString("pt-BR")} você terá ${idade} anos.`;
});
