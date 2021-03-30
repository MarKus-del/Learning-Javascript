// var || functions = Hosting( 
//    Propriedade do Javascript de elevar essas declarações
//    para o topo do arquivo para a execução
//  );

msg("Marcos");

function msg(nome){
  console.log(`Bom dia, ${nome}`);
}

// First-class objects (Obejtos de primeira classe) = podem ser atribuidads a uma variável
// Function expression 

// Arrow Function
const queHorasSao = () => console.log(new Date().toLocaleTimeString());

function executaFuncoes(funcao) {
  console.log("Executando funções através de uma função")
  funcao()
}

executaFuncoes(queHorasSao)