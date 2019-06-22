import express from 'express'
import config from './config'

let _server

// Objeto con dos métodos para arrancar/parar el servidor.
const server = {
  // Inicia el servidor.
  start() {
    const app = express()

    // Seteo variables de configuración desde el .env
    config(app)

    const port = app.locals.config.PORT
    const host = app.locals.config.HOST

    // Guardamos la instancia del servidor.
    _server = app.listen(port, () => {
      // Muestro información al arrancar el servidor.
      console.log(`Servidor abierto en http://${host}:${port}`)

      return _server
    })
  },

  // Detiene la ejecución del servidor.
  close() {
    _server.close()
  }
}

// Exporto el servidor por si necesito utilizarlo en otro lugar
export default server

// Si el fichero no tiene módulo padre ejecuto el servidor
if (!module.parent) {
  server.start()
}

// Controlar errores en el código, esto lo prepara para mostrarlo personalizado.
process.on('unhandledRedjection', (err, p) => {
  console.log('Custom Error: An unhandledRejection ocurred')
  console.log(`Custom Error: Rejection ${error}`)
})
