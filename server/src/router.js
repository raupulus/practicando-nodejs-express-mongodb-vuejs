// Importo archivo de rutas
import recetas from './routes/recetas'
import auth from './routes/auth'

export default app => {
    // Ruta hacia /recetas
    app.use('/recetas', recetas)

    // Ruta para autenticado
    app.use('/auth', auth)
}
