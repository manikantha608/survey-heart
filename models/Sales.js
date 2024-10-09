
const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
    agentEmail: {
        type: String,
        required: true,
        ref: "Agents"
    },
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    saleDate: { type: Date, default: Date.now }
}, { timestamps: true });

const Sale = mongoose.model('Sale', saleSchema);
module.exports = Sale;
