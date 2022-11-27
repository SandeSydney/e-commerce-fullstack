const mssql = require("mssql")
const {
    v4
} = require("uuid")
const sqlConfig = require("../Config/index")

const getAllProducts = async (req, res) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        const response = await pool.request().execute('usp_GetAllProducts')
        const products = await response.recordset
        if (products.length) {
            res.status(200).json(products)
        } else {
            res.status(404).json({
                message: "No product found in Database!"
            })
        }
    } catch (error) {
        res.status(404).send({
            error: error.message
        })
    }
}

const addOrUpdateProducts = async (req, res) => {
    try {
        const {
            id,
            name,
            description,
            price,
            image_url,
            discount_rate
        } = req.body
        const pool = await mssql.connect(sqlConfig)
        await pool.request()
            .input("id", mssql.VarChar, id)
            .input("name", mssql.VarChar, name)
            .input("description", mssql.VarChar, description)
            .input("price", mssql.VarChar, price)
            .input("image_url", mssql.VarChar, image_url)
            .input("discount_rate", mssql.VarChar, discount_rate)
            .execute('usp_InsertUpdateProduct')

        res.status(201).send({
            message: "Product Added Successfully!"
        })
    } catch (error) {
        res.status(404).send({
            error: error.message
        })
    }
}

const softDeleteProduct = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const pool = await mssql.connect(sqlConfig)
        const prodItem = await (await pool.request()
            .input("id", mssql.VarChar, id)
            .execute("usp_GetOneProduct")
        ).recordset

        if (prodItem.length) {
            await pool.request()
                .input("id", mssql.VarChar, id)
                .execute("usp_DeleteProduct")
            res.status(200).json({message: "Product deleted successfully!"})
        } else {
            res.status(404).send({
                message: `Product of id '${id}' not found!`
            })
        }
    } catch (error) {
        res.status(404).send({
            error: error.message
        })
    }
}

const getOneProduct = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const pool = await mssql.connect(sqlConfig)
        const prodData = await (await pool.request()
            .input("id", mssql.VarChar, id)
            .execute('usp_GetOneProduct')
        ).recordset

        if (prodData.length) {
            res.status(200).json(prodData)
        } else {
            res.status(404).json({
                message: `Product with id = '${id}' not found!`
            })
        }
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

// Export the methods
module.exports = {
    getAllProducts,
    getOneProduct,
    addOrUpdateProducts,
    softDeleteProduct
}