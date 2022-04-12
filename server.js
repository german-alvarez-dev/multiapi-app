const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use("/products", require('./routes/products.routes'))
app.use("/foods", require('./routes/foods.routes'))
app.use("/users", require('./routes/users.routes'))

const PORT = process.env.PORT || 5005
app.listen(PORT, () => console.log("Server now started at: http://localhost:" , PORT))
