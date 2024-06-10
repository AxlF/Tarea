const db = require('../db/connection');

class Order {
  static createOrder(tableNumber, items, subtotal, total) {
    const query = `INSERT INTO orders (table_number, items, subtotal, total) VALUES (?, ?, ?, ?)`;
    db.query(query, [tableNumber, items, subtotal, total], (err, results) => {
      if (err) {
        console.error('Error creating order:', err);
      } else {
        console.log('Order created successfully');
      }
    });
  }
}

module.exports = Order;