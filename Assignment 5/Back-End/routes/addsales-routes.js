const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const SalesModel = mongoose.model("SalesModel");
const protectedRoute = require('../middleware/protectedResource');

// Get the start and end times for today
const start = new Date();
start.setHours(0, 0, 0, 0);

const end = new Date();
end.setHours(23, 59, 59, 999);

// Sales route to display the sales
router.get("/sales", protectedRoute, async (req, res) => {
    try {
        const dbSales = await SalesModel.find({ author: req.user._id })
            .populate("author", "_id firstName lastName");
        res.status(200).json({ sales: dbSales });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Top 5 sales route to display the top 5 sales of the particular user
router.get("/top5sales", protectedRoute, async (req, res) => {
    try {
        const dbSales = await SalesModel.find({ author: req.user._id })
            .sort({ amount: -1 })
            .limit(5)
            .populate("author", "_id firstName lastName");
        res.status(200).json({ sales: dbSales });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Today's revenue route to display today's revenue of the particular user
router.get("/todaysrevenue", protectedRoute, async (req, res) => {
    try {
        const dbSales = await SalesModel.find({
            $and: [{ author: req.user._id }, { createdAt: { $gte: start, $lt: end } }]
        }).populate("author", "_id firstName lastName");

        const totalRevenue = dbSales.reduce((total, sale) => total + sale.amount, 0);

        res.status(200).json({ totalRevenue });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Add sales route to post the data of sales
router.post("/addsales", protectedRoute, async (req, res) => {
    const { pname, quantity, amount } = req.body;
    const salesId = generateSalesId();

    if (!pname || !quantity || !amount) {
        return res.status(400).json({ error: "All fields are mandatory" });
    }

    req.user.password = undefined;

    const saleObj = new SalesModel({ pname, quantity, amount, author: req.user, salesId });

    try {
        const newSale = await saleObj.save();
        res.status(201).json({ sale: newSale });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Function to generate a random sales ID
function generateSalesId() {
    const length = 5; // Adjust the length of the ID as needed
    const characters = '0123456789';
    let salesId = 'S';
    for (let i = 0; i < length - 1; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        salesId += characters[randomIndex];
    }
    return salesId;
}

module.exports = router;
