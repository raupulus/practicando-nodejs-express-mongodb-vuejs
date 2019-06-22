// Importo librería para conectar a mongodb
import mongoose from 'mongoose'

/**
 * Esquema con el modelo para la tabla "recetas" en la DB "recetas"
 * usando mongodb para su gestión.
 *
 * Recibe dos objetos, uno con los atributos y el segundo con la configuración.
 */
const RecetaSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        ingredients: { type: Array, trim: true, required: true },
        description: { type: String, required: true },
        difficulty: { type: String, required: true },
        persons: { type: Number, required: true },
        time: { type: Number, required: true }
    },
    {
        // Indica que ignore parámetros no contemplados sin abortar proceso.
        strict: false
    }
)

// Métodos estáticos

/**
 * Obtener una receta concreta por el id.
 * @param id El id de la receta.
 * @returns {Promise}
 */
RecetaSchema.statics.getById = function (id) {
    return this.findOne({ _id: id })
        .lean()  // Indica que la aprenda/recuerde, útil si se ejecuta mucho.
        .exec()  // Ejecuta la consulta.
}

/**
 * Devuelve todas las recetas.
 * @returns {Promise}
 */
RecetaSchema.statics.getAll = function () {
    return this.find()
        .sort({ title: 'asc' })  // Ordena por el título de forma ascendente.
        .exec()
}

export default RecetaSchema
