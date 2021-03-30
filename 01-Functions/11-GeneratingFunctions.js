// uma função que faz mais de um retorno

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();

  yield 3;
  yield 4;
  yield 5;
}

const g = geradora4();

for(let valor of g){
  console.log(valor);
}