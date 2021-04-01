function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {

    setTimeout(() => { 
      if (typeof msg !== 'string') {
        reject('Cai no erro');
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na promise!");
      return;
    }, tempo);
  });
}

async function executa() {
  try{

    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);

    // Pending
    const fase2 = esperaAi('Fase 2', rand());
    console.log(fase2);
  }catch(e) {
    console.log(e);
  }
}

executa();