import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'

// Importo config desde dotenv
import { config } from 'dotenv'

// Carga todas las variables extraidas del .env en la constante.
const SETTINGS = config()

// Carga la configuración de express
export default app => {
  // Por seguridad para que desde fuera no se sepa que es express
  app.disable('x-powered-by')

  // Seteo el entorno
  app.set('env', SETTINGS.parsed.ENV)

  // Guardo configuración dentro de express para poder acceder desde otro lugar.
  app.set('config', SETTINGS.parsed)

  // Guardo configuración en local para hacerlo disponible en la request.
  app.locals.env = app.get('env')
  app.locals.config = app.get('config')

  // Uso el middleware morgan como logger (combined → más completo)
  app.use(logger('combined'))

  // Uso el middleware body-parser para que entienda json y codifique url sin
  // el modo extend
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  // Aplicamos la abstracción del CORS
  app.use(cors())
}
