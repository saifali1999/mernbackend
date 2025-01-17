const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    lastname : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    gender : {
        type:String,
        required:true
    },
    phone : {
        type:Number,
        required:true
    },
    age : {
        type:Number,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    confirmpassword : {
        type:String,
        required:true
    },
})

// now we need to create a collection

const Register = new mongoose.model("User", userSchema);

module.exports = Register;