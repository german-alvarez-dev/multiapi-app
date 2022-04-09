const fs = require("fs")

function readJSONFile(name) {
    return JSON.parse(fs.readFileSync(name))
}

module.exports = { readJSONFile }