const express = require('express')
const Employee = require('./employee.js')
const routes = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

routes.post('/', async(req,res)=>{
    let emp = new Employee({
    EmpName:req.body.EmpName    ,
    position:req.body.position ,
    department:req.body.department
    })
    try{
        await emp.save()
        res.send(emp)
    }
    catch(e){
        res.status(400).send(e)
    }
})

routes.get('/:id', async(req,res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
            let singleEmp = await Employee.findById(req.params.id)
            res.send(singleEmp)
        }
    }
    catch(e){
        res.status(400).send(e)
    }
})
routes.get('/', async(req,res)=>{
    try{
            let emp = await Employee.find()
            res.send(emp)
        
    }
    catch(e){
        res.status(400).send(e)
    }
})
routes.delete('/:id', async(req,res)=>{
    try{
            let emp = await Employee.findByIdAndRemove(req.params.id)
            res.send(emp)
        
    }
    catch(e){
        res.status(400).send(e)
    }
})
routes.put('/:id', async(req,res)=>{
    try{
            let emp = new Employee({
            EmpName:req.body.EmpName    ,
            position:req.body.position ,
            department:req.body.department
            })
            emp = await Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true})
            res.send(emp)
        

    }
    catch(e){
        res.status(400).send(e)
    }
})
module.exports = routes