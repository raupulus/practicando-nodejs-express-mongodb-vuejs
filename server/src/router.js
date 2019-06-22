// Importo archivo de rutas
import recetas from './routes/recetas'

export default app => {
    // Ruta hacia /recetas
    app.use('/recetas', recetas)
}
