const info = JSON.parse(sessionStorage.getItem('oauth'));
const API = 'http://127.0.0.1:8080/oauth/authorize'

if(! ( localStorage.getItem('api_key') localStorage.getItem('p_hashed_w') ) ) 
  location.href = 'https://bflex.tech'

function auth() {
  let auth = prompt('Para completar a autenticação, e termos ciência de que você tem certeza da decisão, Digite: "Estou ciente dos riscos e confirmo ter lido a pagina"', 'Eu não autorizo a autenticação');
  if( auth == 'Estou ciente dos riscos e confirmo ter lido a pagina' )
    {
      fetch(`${API}/${info.id.id.String}/${localStorage.getItem('p_hashed_w')}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization-key': 'Bearer ' + localStorage.getItem('api_key')
        }
      });
    }
}

document.querySelector('body').innerHTML = `
<h2>A partir do momento que você apertar o botão abaixo, você dará poder quase completo para ${info.platform_name} operar em sua conta. Isso permite:</h2>
<ul>
  <li>Saques em seu nome</li>
  <li>Vendas em seu nome</li>
  <li>Revendas em seu nome</li>
</ul>
<p>Está ciente de que aceita isto?</p>
<button onclick="auth()">
  Autorizar conexão
</button>
`
