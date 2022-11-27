const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken")

const tokenVerify = (req, res, next) => {
    try {
        const token = req.headers['token']
        if (!token) {
            return res.status(401).json({
                message: "Access Denied. Supply a token"
            })
        }

        const dataDecoded = jwt.verify(token, process.env.SECRET)
        req.info = dataDecoded
    } catch (error) {
        return res.status(404).json({error:error.message})
    }

    next()
}

module.exports = {
    tokenVerify
}