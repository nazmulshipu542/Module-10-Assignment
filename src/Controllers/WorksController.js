const WorksModel = require('../Models/WorksModel');
const { params } = require('./Routes/api');

//CRUD

//C = Create
exports.InsertWorks=(req, res)=>{
    let reqBody = req.body;
    WorksModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//R = Read
exports.ReadWorks=(req, res)=>{
    let query = {};
    let projection = "title classNote description status email";
    WorksModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//U = Update
exports.UpdateWorks=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    let reqBody = req.body;
    WorksModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//D = Delete
exports.DeleteWorks=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    WorksModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
} 