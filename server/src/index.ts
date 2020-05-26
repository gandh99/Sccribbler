import express, { Application, Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv'
const passport = require("passport")

// Init
const app: Application = express()
dotenv.config()

// Connect to DB
const db = require('./config/db')

// Passport
require("./config/passport")(passport)
app.use(passport.initialize())
app.use(passport.session())

// Bodyparser
app.use(express.json())

// Routes
app.use('/authentication', require('./routes/authentication'))
app.use('/notes', require('./routes/notes'))
app.use('/category', require('./routes/category'))
app.use('/notifications', require('./routes/notifications'))

// Start the server
const port: string | number = process.env.SERVER_PORT || 5000
const server = app.listen(port, () => console.log(`Server started on port ${port}...`))
const io = require('socket.io')(server)
require('./config/io').init(io)