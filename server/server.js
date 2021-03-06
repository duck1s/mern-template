const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./db/conn.js')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/test', require('./routes/testRoutes'))
app.use('/api/projects', require('./routes/projectRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
