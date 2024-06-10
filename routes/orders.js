const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.post('/new', (req, res) => {
  const { tableNumber, items, subtotal, total } = req.body;
  Order.createOrder(tableNumber, items, subtotal, total);
  res.send('Order created successfully');
});

module.exports = router;