import mongoose from 'mongoose'
import { config } from 'dotenv'

const SETTINGS = config()

/**
 * Clase que representa la conexión con la Base de Datos MongoDB
 */
class Database {

    /**
     * Constructor de la clase.
     */
    constructor () {
        this.conn = false
    }

    /**
     * Devuelve la conexión.
     * @returns {boolean}
     */
    connection () {
        return this.conn
    }

    /**
     * Devuelvo una promesa para que no arranque el servidor hasta que
     * se haya establecido correctamente la conexión con la DB.
     * @returns {Promise<any>}
     */
    connect () {
        const host = `${SETTINGS.parsed.DB_PROTOCOL}://${SETTINGS.parsed.DB_URL}:${SETTINGS.parsed.DB_PORT}/${SETTINGS.parsed.DB_NAME}`

        return new Promise(resolve => {
            // Activa el modo debug si está definido en la variable de entorno.
            mongoose.set('debug', SETTINGS.parsed.DB_DEBUG)

            // Utiliza el sistema de promesas global.
            mongoose.Promise = global.Promise

            // Conecto a mongo y guardo la conexión.
            this.conn = mongoose.createConnection(
                host,
                { poolSize: SETTINGS.parsed.DB_POOLSIZE }
            )

            // Acciones cuando se produce un error.
            this.conn.on('error', err => {
                console.log('Mongo Error', err)
                return process.exit()
            })

            // Acciones cuando se ha conectado correctamente a la DB.
            this.conn.on('connected', () => {
                console.log('Connected to Database')
                resolve()  // Resuelve la promesa
            })
        })
    }
}

// Creo instancia de la conexión.
const instance = new Database()

// Exporto la instancia de la conexión.
export default instance


