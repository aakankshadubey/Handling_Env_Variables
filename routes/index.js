const express = require('express')
const route = express.Router()
const app = express()
const path = require('path')


const home_path = path.join(__dirname, "../public/homePage")

route.use('/', express.static(home_path))
route.use('/addProcess', require("./addProcess"))

exports = module.exports = route