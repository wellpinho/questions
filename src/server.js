require('dotenv').config()

const express = require('express')
const routes = require('./routes/index.routes')
const app = express()

app.use(routes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
