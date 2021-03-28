const products = require("../products.json");

const getProducts = (req, res) => {
  if (req.query.price) {
    const items = products.filter(
      (val) => val.price >= parseInt(req.query.price)
    );
    return res.send(items);
  }
  res.send(products);
};

module.exports = getProducts;
