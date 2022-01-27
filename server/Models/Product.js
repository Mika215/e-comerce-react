const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String},
  image: {type: String, required: true},
  categories: {type:Array},
  size: {type: String, required:true},
  color: {type:String},
  price:{type:Number,required:true}
},
{
    timestamps: true,
  });

module.exports = mongoose.model("Product", productSchema);
