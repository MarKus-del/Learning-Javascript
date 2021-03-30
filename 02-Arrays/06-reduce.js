// reduce = reduz o array a uma variavel

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const soma = numeros.reduce((acumulador, elemento) => acum += el, 0);

const maiorNumero = numeros.reduce((acumulador, elemento) => {
  if(acumulador < elemento) acumulador = elemento
  return acumulador
}, 0);

console.log(soma);
console.log(maiorNumero);