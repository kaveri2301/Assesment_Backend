
const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    empname: {
        type: String,
        required: true
    },
    empid: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        default: [],
        required: true
    },

    city: {
        type: String,
        required: true
    },
    joiningdate: {
        type: Date,
        required: true
    },
    marritalstatus: String,
    
    image:{
        type:String,
        // required:true
    }
}, { timestamps: true })


module.exports = mongoose.model('emp', employeeSchema)