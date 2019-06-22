class RecetasController {
    recetas (request, response, next) {
        return response
            .status(200)
            .json({key: 'value'})
    }

    receta (request, response, next) {
        return response
            .status(200)
            .json({id: request.params.id})
    }
}

export default new RecetasController()
