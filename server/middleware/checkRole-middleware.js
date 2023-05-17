const ApiError = require('../error/ApiError')
const tokenService = require('../service/token-service')

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const authorizationHeader = req.headers.authorization;
            if(!authorizationHeader) {
                return next(ApiError.Unauthorized("Token not found"))
            }

            const accessToken = authorizationHeader.split(' ')[1];
            if(!accessToken) {
                return next(ApiError.Unauthorized("Auth is not authorized"))
            }

            const userData = tokenService.validateAccessToken(accessToken);
            if(!userData) {
                return next(ApiError.Unauthorized("Your token has not been validated"))
            }

            if (!roles.includes(userData.role)) {
                return next(ApiError.Unauthorized("Your role is not confirmed"))
            }
            req.user = userData;
            next()
        } catch (e) {
            return next(ApiError.Unauthorized("Auth is not authorized"))
        }
    }
}
