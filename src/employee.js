const mongoose = require('mongoose')

const Employee = mongoose.model('Employee',{
    EmpName:{type:String},
    position:{type:String},
    department:{type:String}
})

module.exports = Employee