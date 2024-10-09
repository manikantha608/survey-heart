const express = require("express");
const  saleController  = require("../controllers/saleController");
const router = express.Router();

router.post("/sales", saleController.createSale);
router.get("/sales/agent/:email", saleController.getSalesByAgent);


module.exports = router;
