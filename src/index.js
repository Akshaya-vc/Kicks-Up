const express = require('express')
const userRouter = require('./routers/user')
const mongoose= require('./db/mongoose')
const User= require('./models/user')

const app = express()
app.use(express.json())
app.use(userRouter)