const a1 = {
  chaveA: 'A'
};

const b1 = {
  chaveB: 'B'
};

// mudando a cadeia do prototype
Object.setPrototypeOf(b1, a1);
const c1 = Object.create(b1, {
  chaveC: {
    value: 'C'
  }
});
// pegar o prototype
console.log(Object.getPrototypeOf(b1));
console.log(Object.getPrototypeOf(c1));
console.log(c1.chaveC);