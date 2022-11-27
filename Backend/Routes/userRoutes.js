const { Router } = require('express')
const { signUpUser, loginUser } = require('../Controller/userController')


const userRoutes = Router()

userRoutes.post("./signup", signUpUser)
userRoutes.post("./login", loginUser)

module.exports = {
    userRoutes
}