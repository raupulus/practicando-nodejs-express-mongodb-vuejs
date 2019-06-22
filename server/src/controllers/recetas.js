class RecetasController {
    // Muestra todas las recetas
    recetas (request, response, next) {
        return response
            .status(200)
            .json({key: 'value'})
    }

    // Muestra la receta recibida en el parámetro id
    receta (request, response, next) {
        return response
            .status(200)
            .json({id: request.params.id})
    }

    // Añade una nueva receta mediante petición POST
    create (request, response, next) {
        return response
            .status(201)
            .json({key: 'value POST'})
    }

    // Actualiza una receta ya existente mediante petición PUT
    update (request, response, next) {
        return response
            .status(200)
            .json({key: `value PUT con parámetro: ${request.params.id}`})
    }
}

export default new RecetasController()
