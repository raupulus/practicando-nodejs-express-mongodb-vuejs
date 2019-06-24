// models/index.js
import db from '../database'

import RecetaSchema from './recetas'

// Exporto el esquema asociado a un modelo de mongodb
export const Receta = () =>
    db.connection().model('Recetas', RecetaSchema)
