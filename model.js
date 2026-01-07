const mongoose = require('mongoose');
const UsersData = mongoose.Schema({
    username :{
        type : String,
        requried :true,
    },
    email :{
        type : String,
        requried :true,
    },
    password :{
        type : String,
        required:true,
    },
    date : {
        type : Date,
        default : Date.now
    }
})
module.exports = mongoose.model('userdata',UsersData)