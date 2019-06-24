import { Receta } from "../models";

class RecetasController {
    // Muestra/devuelve todas las recetas
    async recetas (request, response, next) {
        const data = await Receta().getAll()

        return response
            .status(200)
            .json(data)
    }

    // Muestra/devuelve la receta recibida en el parámetro id
    async receta (request, response, next) {
        console.log('El id es: ' + request.params.id)
        const data = await Receta().getById(request.params.id)
        console.log('TERMINO DE OBTENER DATA')
        return response
            .status(200)
            .json(data)
    }

    // Añade una nueva receta mediante petición POST
    async create (request, response, next) {
        const newReceta = Receta()({
            title: request.body.title,
            description: request.body.description,
            persons: request.body.persons,
            time: request.body.time,
            ingredients: request.body.ingredients,
            difficulty: request.body.difficulty
        })

        const data = await newReceta.save()

        return response
            .status(201)
            .json(data)
    }

    // Actualiza una receta ya existente mediante petición PUT
    async update (request, response, next) {
        const newReceta = {
            title: request.body.title,
            description: request.body.description,
            persons: request.body.persons,
            time: request.body.time,
            ingredients: request.body.ingredients,
            difficulty: request.body.difficulty
        }

        const data = await Receta()
            .findOneAndUpdate(
                { _id: request.params.id },
                newReceta
            )

        // Devuelvo el nuevo valor actualizado
        return response
            .status(200)
            .json(newReceta)
    }
}

export default new RecetasController()
