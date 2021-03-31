class Pessoa {
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`);
  }
}

const people = new Pessoa("Marcos", "Rodrigues");

console.log(people);
people.nomeCompleto();