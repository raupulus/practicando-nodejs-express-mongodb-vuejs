/**
 * Este middleware comprueba la ruta a la que se accede verificando que el
 * usuario esté autenticado para permitirle acceder a la ruta privada.
 */

import jwt from 'jwt-simple'

export default (request, response, next) => {

    // En caso de no contener autorización la petición.
    if (!request.headers.authorization) {
        return response
            .status(403)
            .send({ message: 'No authenticate' })
    }

    // Obtengo el token y se decodifica
    const token = request.headers.authorization.split(' ')[1]
    const payload = jwt.decode(token, request.app.locals.config.TOKEN)

    request.user = payload.email

    next()
}
