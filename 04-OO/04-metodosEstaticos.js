class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  static aumentarVolume() {
    this.volume += 2;
  }

  static diminuirVolume() {
    this.volume -= 2;
  }
}