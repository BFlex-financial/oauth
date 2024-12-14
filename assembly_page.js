const page = document;
const API = 'http://127.0.0.1/oauth/authorize'
const info = JSON.parse(sessionStorage.getItem('oauth'));

if(! localStorage.getItem('api_key') ) 
  location.href = 'https://bflex.tech'

page.innerHTML = `
  <html>
    <head>
    </head>
    <body>
      <h2>A partir do momento que você apertar o botão abaixo, você dará poder quase completo para ${info.platform_name} operar em sua conta. Isso permite:</h2>
      <ul>
        <li>Saques em seu nome</li>
        <li>Vendas em seu nome</li>
        <li>Revendas em seu nome</li>
      </ul>
      <p>Está ciente de que aceita isto?</p>
      <button onclick="(function () {

      let auth = prompt('Para completar a autenticação, e termos ciência de que você tem certeza da decisão, Digite: \"Estou ciente dos riscos e confirmo ter lido a pagina\"', 'Eu não autorizo a autenticação');
      if( auth == 'Estou ciente dos riscos e confirmo ter lido a pagina' )
        {
          fetch(\`${API}/${info.id.id.String}\`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              'Authorization-key': 'Bearer ' + localStorage.getItem('api_key')
            }
          });
        }
      
      })()">
        Autorizar conexão
      </button>
    </body> 
  </html>
`
