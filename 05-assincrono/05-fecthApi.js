// só funciona no browser :(
// problemas com CORS no navegador 
fetch('https://google.com')
  .then(response => console.log(response))
  .catch(error => console.log("Requisição mal feita:" + error));