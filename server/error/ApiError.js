class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status
        this.errors = errors
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }

    static Unauthorized(message) {
        return new ApiError(401, message)
    }

    static Forbidden(message) {
        return new ApiError(403, message)
    }

    static NotFound(message) {
        return new ApiError(404, message)
    }

    static Internal(message) {
        return new ApiError(500, message)
    }

    static TimedOut(message) {
        return new ApiError(408, message)
    }

    static TooManyRequests(message) {
        return new ApiError(429, message)
    }
}

module.exports = ApiError