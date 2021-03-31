const produto = { nome: "Caneca", preco: 1.8 }

// cria um novo objeto atraves de outro, sem fazer a mesma referencia
const caneca = Object.assign({}, produto, {material: "Plastico"});

caneca.nome = "Caneca personalizada";
caneca.preco = 10.5;

console.log(produto);
console.log(caneca);

// retorna as opções da propriedade passada
console.log(Object.getOwnPropertyDescriptor(caneca, 'material'));

console.log(Object.values(caneca));
console.log(Object.entries(caneca));

for(let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}