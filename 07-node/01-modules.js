const nome = 'Marcos';
const lastName = 'Rodrigues';

const falaNome = () => {
  console.log(nome, lastName);
}

// module.exports.nome = nome;
// module.exports.lastName = lastName;
// module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.lastName = lastName;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

module.exports = {
  nome,
  lastName,
  falaNome
}

console.log(module);
