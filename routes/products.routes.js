const router = require("express").Router()
const { readJSONFile } = require("../utils/fs.utils")


router.get('/allProducts', (req, res) => {
    const allProducts = readJSONFile("products.json")
    res.send(allProducts)
})


router.get('/product/:productId', (req, res) => {
    const allProducts = readJSONFile("products.json")

    const { productId } = req.params
    const foundProduct = allProducts.find(product => product.id == productId)

    res.send(foundProduct)
})


router.get('/category/:categoryName', (req, res) => {
    const allProducts = readJSONFile("products.json")

    const { categoryName } = req.params
    const foundProducts = allProducts.filter(product => product.category == categoryName)

    res.send(foundProducts)
})


router.get('/brand/:brandName', (req, res) => {
    const allProducts = readJSONFile("products.json")

    const { brandName } = req.params
    const foundProducts = allProducts.filter(product => product.brand == brandName)

    res.send(foundProducts)
})

router.use((req, res) => res.status(404).send({ code: 404, message: 'This route does not exist' }))

module.exports = router