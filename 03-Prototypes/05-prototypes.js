function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
} 

const pessoa = new Pessoa("Fulano", "Ciclano");

console.log(pessoa);
console.log(pessoa.nomeCompleto());