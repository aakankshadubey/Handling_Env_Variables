const express = require("express")
const route = require('express').Router()
const path = require("path")
const dotenv = require('dotenv');
const fs = require('fs') 
const envfile = require('envfile')
dotenv.config();

const file_path = path.join(__dirname, "../public/addProcess")

route.use('/', express.static(file_path))


route.post('/add', (req, res) => {

    const source_path = __dirname +  "/../.env"
    // console.log(req.body)

    fs.appendFile(source_path, "\r\n" +  req.body.process_name  + "=" + req.body.key_val , (err) => {
        if(err) {
            return console.log(err);
        }
        res.send({success : true})
     })
})

exports = module.exports = route
