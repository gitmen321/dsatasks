const AuthService = require('./token.servie');
const AuthRepository = require('./auth.repository');
const authRepository = new AuthRepository();

const authService = new AuthService(authRepository);

const login = async (req, res, next) => {
    try {

        const data = req.body;
        const user = await authService.validateUser(data);

        const payload = {
            userId: user._id,
            name: user.name
        }
        const accessToken = await authService.generateAccessTokenService(payload);
        const refreshToken = await authService.generateRefreshTokenService(payload);

        res.cookie('refreshToken', refreshToken, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "Login Successfull",
            token: accessToken,
        })

    } catch (error) {
        next(error);
    }
}