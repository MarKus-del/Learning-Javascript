// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
  const sobrenome = "Rodrigues";
  function criaNome(nome){
    return `${nome} ${sobrenome}`;
  }

  function falaNome() {
    console.log(criaNome("Marcos"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(19, 60, 1.80);

