// arguments = so funciona com funções declaradas com function!
function parametros() {
  const description = [];
  for(let prop of arguments){
    description.push({value: prop, type: typeof prop})
  }
  console.table(description);
}

parametros("MArcos", "Olá", true, 01, "2015", 20.5);

// valores como 0, "" e null são considerados na atribuição, 
// ou seja o valor padrão so é atribuido caso o valor recebido seja undefined!
function defaultValuesInArguments(a = 0, b = 0, c = 0, d = 0, e = 0, f = 0){
  const obj = {
    valoresRecebidos: [a,b,c],
    valoresNaoRecebidos: [d, e, f]
  }
  console.table(obj)
}

defaultValuesInArguments(45, 25, 75)

// Rest operator = pega todos os argumentos não declarados passados na função e joga em um array 
function restOperator(val1, val2, ...outrosValores) {
  let maiorValorPassado = val1 >= val2 ? val1 : val2;

  for(let valor of outrosValores){
    if(maiorValorPassado < valor) maiorValorPassado = valor;
  } 
  console.log("O maior valor passado é " + maiorValorPassado)
}

restOperator(1,5,8,7,45,81,95,100)