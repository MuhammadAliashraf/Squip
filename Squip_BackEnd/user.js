// const mongoose=require("mongoose")

// const userSchema=mongoose.Schema({
//     first_name:String,
//     last_name:String,
//     email:String,
//     password:String
// })
// const usermodel=mongoose.model("user",userSchema)

// module.exports=usermodel;


const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  user_name: String,
  email: String,
  password: String,
})
const squipuser = mongoose.model('squipuser', userSchema)
module.exports = squipuser;
