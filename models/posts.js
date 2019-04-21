const mongoose = require('mongoose')

const schema = mongoose.Schema

// creating a Schema
const postSchema = new schema({
    username:{
        type: String,
        required: true    
    },
    
    date:{
        type: Date,
        default: Date.now
    }

})

module.exports = posts = mongoose.model('posts', postSchema)