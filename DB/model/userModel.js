const  mongoose  = require("mongoose");
const bcrypt = require('bcryptjs');
const crypto = require('crypto-js');
const userSchema = new mongoose.Schema({
  first_name:{
      type:String,
      required:true
  },
  last_name:{
    type:String,
    required:true
},
age:{
  type:Number,
  required:true
},
 email:{
    type:String,
    required:true,
    unique:true
 },
 password:{
    type:String,
    required:true
 },

},{timestamp:true});

userSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password,parseInt(process.env.saltRound));
    //this.phone = await crypto.AES.encrypt(`${this.phone}`,process.env.en_secret);
    next();
});

userSchema.post('save', function(error, doc, next) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      next(new Error(error,doc));
    } else {
      next();
    }
  });

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;