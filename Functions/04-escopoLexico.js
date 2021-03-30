// Escopo léxico capacidade da função de 'lembrar' de valores ou funções aonde ela foi declarada
const nome = 'marcos'

function falaNome() {
  console.log(nome);
}

function usaFalaNome(){
  const nome = "Fulano"
  falaNome();
}

usaFalaNome();