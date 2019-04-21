const express = require('express')
const router = express.Router()

// bringig posts model
const posts = require('../../models/posts')

// @route   GET request to, 'api/postsrouts'
// @discription  Get all posts from database
// @access : Public
router.get('/', (req,res)=>{
    posts.find().then((posts)=>{
        res.json(posts)
        // join request with posts from database
        //  
    })
})
// Same request , Sorted
// router.get('/', (req,res)=>{
//     postmodel.find().sort({date:-1}).then((posts)=>{
//         res.json(posts)
//         // join request with posts from database
//     })
// })


// @route   POST request to, 'api/postsrouts'
// @discription  Add new posts to database
// @access : Public
router.post('/', (req,res)=>{
    const newPost = new posts({
        username: req.body.username
        
    })
    newPost.save().then((posts)=>{
        res.json(posts)
    })
})


module.exports = router



