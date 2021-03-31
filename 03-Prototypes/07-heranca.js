function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta

// pode se utilizar o prototype para fazer polimorfismo
// Camiseta.prototype.AcaoASerSobrecrita

const camiseta = new Camiseta("Regata", 15, "azul");

camiseta.aumento(5);

console.log(camiseta);