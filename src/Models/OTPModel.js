const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    email:{type : String, default : String},
    otp:{type : String, default : String},
    status:{type : Number, default : Number}
}, {versionKey:false})
const OTPModel = mongoose.model('Student_Register', dataSchema);
module.exports = OTPModel;