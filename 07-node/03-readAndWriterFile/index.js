const path = require('path');
const write = require('./write');
const read = require('./read');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

// const pessoas = [
//   { nome: 'Marcos' },
//   { nome: 'Tiago' },
//   { nome: 'Saulo' },
//   { nome: 'Fulano' }
// ]
// const json = JSON.stringify(pessoas, '', 2);
// write(caminhoArquivo, json);

async function lerArquivo(caminho) {
  const dados = await read(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados)
  console.log(dados);
}
lerArquivo(caminhoArquivo);