import express from 'express'

// Importo el controlador para recetas.
import RecetaController from '../controllers/recetas'

// Importo solo el middleware auth.
import { auth } from '../middlewares'

// Defino que las rutas serán gestionadas por el router de express
const router = express.Router()

// Indico que use el middleware "auth"
router.use(auth)

// Ruta para acceder a la raíz partiendo de "/recetas".
router.route('/')
    .get(RecetaController.recetas)
    .post(RecetaController.create)

// Ruta para acceder a un elemento concreto por su id.
router.route('/:id')
    .get(RecetaController.receta)
    .put(RecetaController.update)

export default router
