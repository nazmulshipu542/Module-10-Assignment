const OTPModel = require('../Models/OTPModel');
const { params } = require('./Routes/api');

//CRUD

//C = Create
exports.InsertOTP=(req, res)=>{
    let reqBody = req.body;
    OTPModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//R = Read
exports.ReadOTP=(req, res)=>{
    let query = {};
    let projection = "email otp status";
    OTPModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//U = Update
exports.UpdateOTP=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    let reqBody = req.body;
    OTPModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
}

//D = Delete
exports.DeleteOTP=(req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    WorksOTP.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data: data})
        }
    })
} 