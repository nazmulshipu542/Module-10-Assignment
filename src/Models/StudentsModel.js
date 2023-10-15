const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    email:{type : String, default : String},
    firstName:{type : String, default : String},
    lastName:{type : String, default : String},
    mobile:{type : String, default : String},
    password:{type : String, default : String},
    address:{type : String, default : String},
    roll:{type : String, default : String},
    class:{type : String, default : String}
}, {versionKey:false})
const StudentsModel = mongoose.model('Student_Register', dataSchema);
module.exports = StudentsModel;