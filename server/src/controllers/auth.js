import jwt from 'jwt-simple'

/**
 * Class AuthController.
 */
class AuthController {
    token (request, response, next) {
        console.log(request.body.email)

        // Cuando en el POST no se envía el email.
        if (!request.body.email) {
            return response
                .status(401)
                .send({ error: 'Es necesario el email' })
        }

        const payload = {
            email: request.params.email
        }

        return response
            .status(200)
            .send({
                token: jwt.encode(payload, request.app.locals.config.TOKEN)
            })
    }
}

export default new AuthController()
