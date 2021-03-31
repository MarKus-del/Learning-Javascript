function Produto(nome, preco, estoque){
  
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: false,
      configurable: false,
    }
  })

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // atribui o valor
    writable: true, // pode alterar ou não
    configurable: false // configuravel
  })

  Object.defineProperty(this, 'nome', {
    enumerable: true,
    value: nome,
    writable: true,
    configurable: false
  })
}

const p1 = new Produto("Camiseta", 23.5, 5)
delete p1.estoque;
delete p1.nome;
console.log(Object.keys(p1));