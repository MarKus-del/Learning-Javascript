// Factory Functions = funcão que retorna a instancia de um objeto

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    set nomeCompleto(novoNome){
      novoNome = novoNome.split(' ');
      this.nome = novoNome.shift();
      this.sobrenome = novoNome.join(' ');
    },

    fala(assunto) {
      return `${this.nome} está falando sobre ${assunto}`;
    },

    peso: 60,
    altura: 1.80,
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  }
}

const pessoa = criaPessoa("Marcos", "Rodrigues");
console.log(pessoa.fala("Kotlin"));
console.log(pessoa.imc);

pessoa.nomeCompleto = "Marcos Rodrigues Barros da Silva";
console.log(pessoa.nomeCompleto);
console.log(typeof pessoa);