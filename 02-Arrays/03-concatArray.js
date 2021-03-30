const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const newArray = num1.concat(num2);

console.log(newArray);

const nome = "Marcos";
const sobrenome = "Rodrigues ";
const restoDoNome = ["Barros ", "Da ", "Silva"]

const fullName = nome.concat(' ' , sobrenome, ...restoDoNome);

console.log(fullName);