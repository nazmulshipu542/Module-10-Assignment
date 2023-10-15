const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    title:{type : String, default : String},
    classNote:{type : String, default : String},
    description:{type : String, default : String},
    status:{type : String, default : String},
    email:{type : String, default : String}
}, {versionKey:false})
const WorksModel = mongoose.model('Student_Register', dataSchema);
module.exports = WorksModel;