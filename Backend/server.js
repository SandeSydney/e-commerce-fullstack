const express = require('express')
const {router} = require('./Routes/productRoutes')
const { userRoutes } = require('./Routes/userRoutes')
const dotenv = require('dotenv')
const cors = require("cors")

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/products', router)
app.use('/user', userRoutes)

app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Server is running on port: ${process.env.PORT}`);
})