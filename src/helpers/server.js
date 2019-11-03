import Config from '../config'

function getDomainPort(){

  //  window.location.hostname  -> "domain.com"
  //  window.location.pathname  -> "/sub-dir/app.html"
  //  window.location.origin    -> "http://domain.com"
  //  document.URL              -> "http://domain.com/sub-dir/app.html"

  let port = ''
  let url = ''

  if( window.location.origin.indexOf('localhost') > -1){
    console.log( 'Server::localhost' )
    url = 'http://127.0.0.1'
    port = '8080'
  }else{
    console.log( 'Server::remote' )
    const fileName = window.location.pathname.split('/').pop()
    const hostName = window.location.pathname.replace( fileName, '' )
    url = window.location.origin + hostName + 'index.php'
  }
  return {url,port}
}


const domainPort = getDomainPort()

const url = (Config.server.url !== '') ? Config.server.url : domainPort.url 
const port = (Config.server.port !== '') ? `:${Config.server.port}` : `:${domainPort.port}`

export default {
 
}