import express from 'express'

let _server

// Objeto con dos métodos para arrancar/parar el servidor.
const server = {
    // Inicia el servidor.
    start() {
        const app = express()
        const port = 9000

        // Guardamos la instancia del servidor en el puerto 9000.
        _server = app.listen(port, () => {
            // Muestro información al arrancar el servidor.
            const address = _server.address()
            const host = address.address === '::'
                ? 'localhost'  // Cuando es localhost
                : address      // Cuando no es localhost

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
