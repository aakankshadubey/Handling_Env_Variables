const express = require("express")
const route = require('express').Router()
const path = require("path")
const dotenv = require('dotenv');
dotenv.config();

const file_path = path.join(__dirname, "../public/setProcess")

route.use('/', express.static(file_path))


route.post('/getDetails', (req, res) => {

    console.log(req.body)
    v = req.body.process_name
    res.send({

        process_name : req.body.process_name,
        key_val : process.env[v],
        success : true

    })
})

exports = module.exports = route
