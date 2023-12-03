const { default: mongoose } = require("mongoose");

const productScema = new mongoose.Schema({
 title:{
     type:String,
     required:true
 }, 
 description:{
    type:String,
    required:true
 },
 price:{
    type:Number,
    required:true
 },
 userID:{
     type:mongoose.Schema.Types.ObjectId,
     required:true,
     ref:'user'
 }
},{timestamps:true});

const productModel = mongoose.model('product',productScema);
module.exports = productModel;