const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([rows]) => {
      console.log([rows])
    })
    .catch(err => console.log(err));
};
