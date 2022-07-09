const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/meandb',(err)=>{
    if(!err){
        console.log('DB connected!')
    }
    else{
        console.log('Error in DB connection!')
    }
})

module.exports = mongoose