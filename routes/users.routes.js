const router = require("express").Router()
const { readJSONFile } = require("../utils/fs.utils")

router.get('/allUsers', (req, res) => {
    const allUsers = readJSONFile("users.json")
    res.send(allUsers)
})

module.exports = router
