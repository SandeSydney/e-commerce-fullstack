const {
    Router
} = require('express')
const {
    getAllProducts,
    addOrUpdateProducts,
    getOneProduct,
    softDeleteProduct
} = require('../Controller/productController')
const {
    tokenVerify
} = require('../Middleware/tokenVerify')

const router = Router()

router.get('/', tokenVerify, getAllProducts)
router.post('/', tokenVerify, addOrUpdateProducts)
router.get('/:id', tokenVerify, getOneProduct)
router.delete('/:id', tokenVerify, softDeleteProduct)

// Export the router. Has all methods
module.exports = {
    router
}