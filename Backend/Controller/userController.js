const bcrypt = require('bcrypt')
const mssql = require("mssql")
const sqlConfig = require("../Config/index")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

const signUpUser = async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        const {
            email,
            username,
            password
        } = req.body
        const hashedPass = await bcrypt.hash(password, 8)
        await pool.request()
            .input("email", email)
            .input("username", username)
            .input("password", hashedPass)
            .execute("usp_InsertUpdateUser")
        return res.status(201).json({
            message: "Successfull Add"
        })
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        const pool = await mssql.connect(sqlConfig)
        const user = await (await pool.request()
            .input("email", email)
            .execute("usp_GetUser")
        ).recordset[0]
        if (user) {
            const checkPwd = await bcrypt.compare(password, user.password)
            if (checkPwd) {
                const {
                    password,
                    id,
                    IsDeleted,
                    ...payload
                } = user
                const token = jwt.sign(payload, process.env.SECRET)
                return res.status(200).json({
                    message: "Logged in successfully!",
                    token
                })
            } else {
                return res.status(400).json({
                    message: "Password does not match!"
                })
            }
        } else {
            return res.status(404).send({
                message: "User Not Found!"
            })
        }
    } catch (error) {
        return res.status(404).json({
            error: error.message
        })
    }
}


const homepage = async (req, res) => {
    try {
        const {
            username
        } = req.info
        res.json(`Welcome ${username}`)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports = {
    signUpUser,
    loginUser,
    homepage
}