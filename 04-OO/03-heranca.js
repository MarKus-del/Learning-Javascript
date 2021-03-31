class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado){
      console.log(this.nome + ' já ligado');
      return;
    }

    this.ligado = true;
  }

  ligar() {
    if(!this.ligado){
      console.log(this.nome + ' já desligado');
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, marca){
    super(nome);
    this.marca = marca;
  }
}

const s1 = new Smartphone('iphone', 'apple');
console.log(s1);