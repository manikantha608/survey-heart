const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
      name:{
        type:String,
        required:true            
      },
      price:{
        type:String,
        required:true            
      },
      image:{
        type:String            
      },
      description:{
        type:String          
      }
})

const Product = mongoose.model("Product",productsSchema);
module.exports = Product;