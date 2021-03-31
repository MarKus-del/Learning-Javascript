const pessoa = new Object();
pessoa.nome = "Marcos";
pessoa.sobrenome = "Rodrigues";
pessoa.falarNomeCompleto = function() {
  console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
}

console.log(pessoa.nome);
console.log(pessoa['sobrenome']);
pessoa.falarNomeCompleto();

// objeto sem o this
function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this)
}

// objeto sem opção de alterar suas propriedades
const people = new Pessoa("Marcos", "Rodrigues")
people.nome = "Fulano"
console.log(people);