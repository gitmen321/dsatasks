
const jwt = require('json')

class AuthService {
    constructor(authRepository
    ) {
        this.authRepository = authRepository
    }

    generateAccessTokenService(payload) {
        return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN || '15m',
        });
    }

    generateRefreshTokenService(payload) {
        return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: '7d',
        });
    }
    async validateUser(data) {
        const { email, password } = data;
        const user = await this.authRepository.validateUser(email, password);
    }
}
module.exports = AuthService;