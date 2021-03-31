function Produto(nome, preco, estoque){
  
  this.nome = nome;
  this.preco = preco;

  let _estoque = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: false, // configuravel
    get: function() {
      return _estoque;
    },
    set: function(valor) {

      if(typeof valor !== 'number') {
        throw new TypeError(`O tipo: ${typeof valor}, não corresponde ao valor esperado. Por favor insirá um valor correto!`);
      }
      _estoque = valor;
    } 
  })
}

const p1 = new Produto("Mesa", 660, 50)
// p1.estoque = "50"
console.log(p1);