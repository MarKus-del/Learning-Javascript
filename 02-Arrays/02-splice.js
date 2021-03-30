// splice = retorna um array com os item removidos do array

const frutas = ["Maça", "Pera", "Mamão", "Melancia", "Banana", "caqui", "Alface"];

const itemsRemovidos = frutas.splice(6, 1);
const itemsSubstituidos = frutas.splice(-1, 1 , "Abacate", "Laranja")

console.log(itemsRemovidos);
console.log(itemsSubstituidos);
console.table(frutas);