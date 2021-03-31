const pessoas = [
  {id: 3, nome: 'marcos'},
  {id: 2, nome: 'saulo'},
  {id: 1, nome: 'tiago'}
];

// ordem de inserção se mantem
const novasPessoa = new Map();
for(let pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoa.set(id, {...pessoa});
}

console.log(novasPessoa);
console.log(novasPessoa.get(2));