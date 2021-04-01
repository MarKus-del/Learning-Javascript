function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {

    if (typeof msg !== 'string') {
      reject('Cai no erro');
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise!");
      return;
    }, tempo);
  });
}

const promises = [
  // 'Primeiro valor',
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
  // 'Outro valor'
];

// resolve todas as promessas
// qualquer promessa rejeitada, rejeita todas as outras
// Promise.all(promises)
//   .then(function(valores) {
//     console.log(valores);
//   })
//   .catch(function(erro) {
//     console.log(erro);
//   });

// retorna o valor da primeira promessa resolvida
Promise.race(promises)
  .then(function (valores) {
    console.log(valores);
  })
  .catch(function (erro) {
    console.log(erro);
  });