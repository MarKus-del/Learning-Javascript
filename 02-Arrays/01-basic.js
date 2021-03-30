// Array = valor por referência
// Array literal
const myName = ["Marcos", "Rodrigues", "Barros", "da"];
myName[4] = "Silva";

const myBrotherName = [...myName];

// remove o primeiro elemento do array
myBrotherName.shift();

// adiciona um item no começo do array
myBrotherName.unshift("Saulo")

// remove o ultimo elemento do array
myBrotherName.pop();
myBrotherName.pop();
myBrotherName.pop();

// adicona item no fim do array
myBrotherName.push("Donha")

// exclui um item do array porem não muda os indice
delete myName[2];

console.log(myName);
console.log(myBrotherName);

// Array constructor
const nomes = new Array("Tiago", "Saulo", "Marcos")
console.log(nomes);
