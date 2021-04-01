// só funciona no browser :(
// problemas com CORS no navegador 
fetch('https://google.com')
function example(obj) {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  if(xhr.status >= 200 && xhr.status < 30) {
    obj.sucess(xhr.response);
  } else {
    obj.error(xhr.statusText);
  }
}

const backend = {
  method: 'GET',
  url: 'https://google.com',
  sucess(dados) {
    console.log(dados);
  },
  error(msgError) {
    console.log(msgError);
  }
}

example(backend);