const  Discord  =  require ( 'discord.js' ) ;
 cliente  const =  nueva  discordia . Cliente ( ) ;

cliente . on ( 'listo' ,  ( )  =>  {
    consola . log ( '¡Estoy listo!' ) ;
} ) ;

cliente . on ( 'mensaje' ,  mensaje  =>  {
    if  ( mensaje . contenido  ===  'ping' )  {
    	mensaje . respuesta ( 'pong' ) ;
  	}
} ) ;

// ESTO DEBE SER DE ESTA MANERA
cliente . inicio de sesión ( proceso . env . BOT_TOKEN ) ;
