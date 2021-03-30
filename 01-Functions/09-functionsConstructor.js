// Functions Constructor = retorna objetos

function Pessoa(nome, sobrenome) {

  // Privado
  const telefone = '055-94875-9520';

  // Publico
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Marcos', 'Rodrigues');

console.log(typeof p1);