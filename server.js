const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()


const postsrout =  require('./routs/api/postsrouts') 


// so, anything goes to 'api/postrouts' will go to  './routs/api/postsrouts '


// body parser middleware
app.use(bodyParser.json())

// Database configuration
const db = require('./config/keys').mongoURI

// connect to database

mongoose.connect(db).then(()=>{
    console.log('Database connected')
}).catch((error)=>{
    console.log('error Connecting to database')
    console.log(error)
})


app.use('/api/postrouts', postsrout) 

const port = process.env.PORT || 5000

app.listen(port , ()=>{
    console.log('server started on port ' + port)
})
// 