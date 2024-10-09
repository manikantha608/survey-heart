const mongoose = require("mongoose");
const leadsSchema = mongoose.Schema({
      name:{
         type:String,
         required:true           
      },
      email:{
         type:String,
         required:true,
         unique:true           
      },
      phoneNumber:{
         type:String,
         required:true          
      },
      age:{
         type:String,
         required:true,           
      },
      city:{
         type:String,
         required:true,           
      },
      state:{
         type:String,
         required:true,           
      },
      country:{
         type:String,
         required:true,           
      },
      pincode:{
         type:String,
         required:true,           
      },
      agent:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Agent"           
      }             
})
const Lead = mongoose.model("Lead",leadsSchema);
module.exports = Lead;