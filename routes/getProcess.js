const express = require("express")
const route = require('express').Router()
const path = require("path")
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const readline = require('readline');
const util = require('util')


const file_path = path.join(__dirname, "../public/setProcess")
const env_path = path.join(__dirname, "../.env")


route.use('/', express.static(file_path))


route.post('/getDetails', (req, res) => {
    
    // console.log(req.body)
    v = req.body.process_name

    var lineReader = require('readline').createInterface({
        input: fs.createReadStream(env_path)
     })

     lineReader.on('line', function (line) {
        line = line.split("=")
        // console.log(line)

        if(line[0] === req.body.process_name ) {

            res.send({

                process_name : req.body.process_name,
                key_val : line[1],
                success : true
        
            })
        }
    })

})

 function alter(v, k) {

    var promise =  new Promise((resolve, reject) => {
     

        var lineReader = require('readline').createInterface({
            input: fs.createReadStream(env_path)
         })
        x = ""
        
        lineReader.on('line', function (line) {
            line = line.split("=")
            // console.log(line)

            if(v !== line[0]) {

                l = line[0] + "=" + line[1] + "\r\n"
                x += l
                }
            })

            x +=  (v + "=" + k  + "\r\n")
            lineReader.on('close', function() {
                resolve(x);
            })
    })

    promise.then((x) => {
        x = x.trim()
        // console.log(x);
        fs.writeFileSync(env_path, x)
        
    })
}


route.post('/editDetails', (req, res) => {

    v = req.body.process_name
    k = req.body.key_val

    updated_items = v + "=" + k 
          
   alter(v, k)
    
    res.send({
     success : true
    })
       
    
})

exports = module.exports = route
