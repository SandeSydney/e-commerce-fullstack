const { Router } = require('express')
const { getAllProducts, addOrUpdateProduct, getOneProduct, softDeleteProduct } = require('../Controller')

const router = Router()

router.get('/', getAllProducts)
router.post('/', addOrUpdateProducts)
router.get('/:id', getOneProduct)
router.put('/:id', addOrUpdateProducts)
router.delete('/:id', softDeleteProduct)

// Export the router. Has all methods
module.exports = {
    router
}