const express = require("express");
const mongoose = require("mongoose")
const agentRoutes = require("./routes/agentRoutes");
const productRoutes = require("./routes/productRoutes");
const leadRoutes = require("./routes/leadRoutes");
const saleRoutes = require("./routes/saleRoutes");
const dotEnv = require("dotenv")
const path = require("path")
const app = express();
dotEnv.config();

mongoose.connect(process.env.MONGO_URI).then(()=> console.log("Database is connected"))
.catch(()=>{console.log("Database is not  connected")})

// Middleware
app.use(express.json());

// Routes
app.use("/api", agentRoutes);
app.use("/api", productRoutes);
app.use("/api", leadRoutes);
app.use("/api", saleRoutes);

app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

 
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
