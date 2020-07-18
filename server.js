const express = require('express')
const app = express()
// app.set("view engine", "hbs")

app.use(express.json())
app.use(express.urlencoded({extended : true}))


const PORT = process.env.PORT || 8080

app.use('/', require('./routes/index'))

app.listen(PORT, () => {
    console.log('Server Running On PORT : http://localhost:' + PORT)
})

