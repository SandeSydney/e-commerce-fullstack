const express = require('express')
const {router} = require('./Routes/productRoutes')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
app.use(express.json())
app.use('/products', router)

app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Server is running on port: ${process.env.PORT}`);
})