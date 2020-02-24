const express = require('express')
const app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('Hello World')
})


app.post('/validate', function (req, res) {
    let result = {
        status:"Success",
        code:200
        
    }
    
    res.send(result)
})

//Launch listening server on port 8080
app.listen(8080, function () {
    console.log('App listening on port 8080!')
})