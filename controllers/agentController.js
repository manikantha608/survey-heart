
const Agent = require("../models/Agents")

const createAgent = async(req,res)=>{
      const {name,email,phone,companyId}= req.body; 
      try{
         if(!name && !email && !phone && !companyId){
           return res.status(400).json({message:"please enter required fileds name,email,phone,companyId"})         
         }
         const agentEmail = await Agent.findOne({email})
         if(agentEmail){
            return res.status(401).json({message:"This email already existed..!"})        
         }
         const newAgent = new Agent({
            name,email,phone,companyId   
         })
         
         await newAgent.save();
        
         return res.status(201).json({message:"Agent created",newAgent})
      }catch(error){
         res.status(400).json({ error: "Error creating agent" });
      }           
}

module.exports = createAgent;