const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ordersRouter = require('./routes/orders');

app.use(bodyParser.json());
app.use('/orders', ordersRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});