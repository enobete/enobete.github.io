var request = new XMLHttpRequest()
var app = document.getElementById('fila_passaportes')

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api-sgf.herokuapp.com/api/v1/tipo_docs', true)

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response).data
 /* 
  document.getElementById('fila_passaportes').innerHTML = data.length;
  
  */
  if (request.status >= 200 && request.status < 400) {
    document.getElementById('pass').innerHTML = data[0].attributes.tipo;
    document.getElementById('dir').innerHTML = data[1].attributes.tipo;
    document.getElementById('visto').innerHTML = data[2].attributes.tipo;
   
  } else {
    console.log('error')
  }
}

// Send request
request.send()