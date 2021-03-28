const products = require("../products.json");

const getProduct = (req, res) => {
  const item = products.find((val) => val.id === parseInt(req.params.id));
  if (!item) {
    return res.send("Item not in List");
  }
  res.send(item);
};
module.exports = getProduct;
