function falaFrase(comeco) {

  function falaResto(resto) {
    return comeco + " " + resto;
  }

  return falaResto;
}

const fala = falaFrase("Olá");
console.log(fala("Mundo!"));

// example
function criaMultiplicador(valor) {

  return function multiplicador(multi) {
    return valor * multi;
  }

}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quatriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quatriplica(2))