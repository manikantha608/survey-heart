const Agent = require("../models/Agents");
const Lead = require("../models/Leads");


const createLead = async(req,res)=>{
    const {name,email,phoneNumber,age,city,state,country,pincode,agentEmail} = req.body;
    console.log("mail agent",agentEmail)
    try{
       if(!name || !email  || !phoneNumber || !age || !city || !state || !country || !pincode || !agentEmail){
        res.status(400).json({message:"please enter required fileds name,email,phoneNumber,age,city,state,country,pincode,agentEmail"})
       }
       const lead = await Lead.findOne({email})
       if(lead){
         res.status(401).json({message:"This email is already exited"})        
     }
       const agent = await Agent.findOne({undefined})
       console.log("Agent email",agent)
       
       if(!agent){
         res.status(401).json({message:"the agent is not existed in the database"})        
     }
       const newLead = new Lead({
        name,email,phoneNumber,age,city,state,country,pincode,agent
       })
       await newLead.save()
       res.status(201).json({ message: "Lead created", newLead });
    }catch(error){
        console.log(error)
        res.status(400).json({ error: "Error creating lead" });
    }
}

module.exports = createLead;