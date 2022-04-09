const router = require("express").Router()
const { readJSONFile } = require("../utils/fs.utils")


router.get('/', (req, res) => {
    const allFoods = readJSONFile("foods.json")
    res.send(allFoods)
})



router.use((req, res) => res.status(404).send({ code: 404, message: 'This route does not exist' }))

module.exports = router