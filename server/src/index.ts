import express, { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'
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

// Config for Heroku deployment
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../../client/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../../client/build/index.html'))
})

// Start the server
const port: string | number = process.env.PORT || 5000
const server = app.listen(port, () => console.log(`Server started on port ${port}...`))
const io = require('socket.io')(server)
require('./config/io').init(io)