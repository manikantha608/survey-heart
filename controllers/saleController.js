
const Sale = require("../models/Sales");
const Lead = require("../models/Leads");
const Agent = require("../models/Agents")

const createSale = async (req, res) => {
    try {
        const { leadId, products, agentEmail } = req.body; 

        if (!leadId || !products || products.length === 0 || !agentEmail) {
            return res.status(400).json({ message: "Please provide leadId, products, and agentEmail." });
        }
        
        const agent = await Agent.findOne({ email: agentEmail });

        if (!agent) {
            return res.status(404).json({ message: "agent not found" })
        }

        const lead = await Lead.findById(leadId);
        if (!lead) return res.status(404).json({ message: "Lead not found" });
        const existingSale = await Sale.findOne({ lead: leadId });
        if (existingSale) {
            return res.status(400).json({ message: "A sale has already been recorded for this lead." });
        }
          console.log( agentEmail)
       
        const sale = new Sale({
            lead: leadId,
            agentEmail, 
            products, 
            saleDate: new Date() 
        });

        await sale.save();
        res.status(201).json({ message: "Sale recorded successfully", sale });
    } catch (error) {
        console.error("Error creating sale:", error); 
        res.status(500).json({ error: "Error creating sale", details: error.message });
    }
};



const getSalesByAgent = async (req, res) => {
  try {
    const agentEmail = req.params.email;
    const sales = await Sale.find().populate({
      path: 'lead',
      match: { agent_email: agentEmail }
    }).populate('products');

    if (sales.length === 0) return res.status(404).json({ message: "No sales found for this agent" });

    const totalSalesAmount = sales.reduce((acc, sale) => acc + sale.totalAmount, 0);

    res.status(200).json({ sales, totalSalesAmount });
  } catch (error) {
    res.status(400).json({ error: "Error fetching sales", details: error });
  }
};

module.exports = {createSale,getSalesByAgent}