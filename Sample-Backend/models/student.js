const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fname: {
        type : String,
        require:true,
        trim:true
    },

    lname: {
        type : String,
        require:true,
        trim:true
    },

    email:{
        type : String,
        required : true,
        trim : true
    },
    grade:{
        type : Number,
        required : true,
    
    },

});

const student = mongoose.model("student",studentSchema);
module.exports = student;