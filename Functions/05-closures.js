// capacidade da função de se lembrar de dados do escopo léxico aonde foi declarada
function retornaFuncao() {
  const nome = "Marcos";

  return function () {
    return nome;
  }
}

const funcao = retornaFuncao();
console.log(funcao());