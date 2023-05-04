const {User} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenServise = require('./token-service')
const UserDto = require('../dtos/user-dto')

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            throw new ApiError.BadRequest(`User with e-mail: ${email} already exists`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await User.create({email, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/user/activate/${activationLink}`);

        const userDto = new UserDto(user)
        const tokens = tokenServise.generateTokens({...userDto})
        await tokenServise.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }

    async activate(activationLink) {
        const user = await User.findOne({where: {activationLink}})
        if(!user) {
            throw ApiError.BadRequest('Invalid link')
        }
        user.isActivated = true;
        await user.save();
    }
}

module.exports = new UserService();