const { Router } = require('express')
const { signUpUser, loginUser, homepage } = require('../Controller/userController')
const { tokenVerify } = require('../Middleware/tokenVerify')


const userRoutes = Router()

userRoutes.post("/signup", signUpUser)
userRoutes.post("/login", loginUser)
userRoutes.get("/home", tokenVerify, homepage)

module.exports = {
    userRoutes
}