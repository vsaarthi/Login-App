const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({

username:{
    type:String,
    required:true,
    unique:true
},

password:{
    type:String,
    required:true
},

loginStatus:{
    type:Boolean,
    required:true,
    default:false
}
})

module.exports = mongoose.model('Login',loginSchema,'Login Collection')
