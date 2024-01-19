const path = require('path')
const rootDir = require('../util/path');
const Product = require('../models/product');


exports.getAddProduct = (req, res, next) =>{
  res.sendFile(path.join(__dirname, "../", 'views', 'add-product.html'))
}

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description

    })
    .then((result) => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/');
    })
    .catch(err => console.log(err));
};





