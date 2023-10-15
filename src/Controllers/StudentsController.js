const StudentsModel = require('../Models/StudentsModel');
//const {params} = require('./Routes/api');

//CRUD

//C = Create
exports.InsertStudents=(req, res)=>{
    let reqBody = req.body;
    StudentsModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//R = Read
exports.ReadStudents=(req, res)=>{
    let query = {};
    let projection = "email firstName lastName mobile password address roll class";
    StudentsModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//U = Update
exports.UpdateStudents=(req, res)=>{
    let id = req.params.id;
    let query = {_id: id};
    let reqBody = req.body;
    StudentsModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//D = Delete
exports.DeleteStudents=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    StudentsModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
} 