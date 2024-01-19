const path = require("path");
const express = require("express");
const bodyParser = require("body-parser"); // Add body-parser

const errorController = require("./controllers/error");

const sequelize = require("./util/database");

const app = express();
const port = 3000;

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(express.static(path.join(__dirname, "public")));

// Add body-parser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

//Add 404(page not found) Error Page
app.use(errorController.get404);

//we can also use like this
// app.use('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // Fix the form HTML
// });

// // Fix the parameter order (req, res, next)
// app.post('/product', (req, res, next) => {
//     console.log(req.body.title);
//     res.redirect('/');
// });
// app.use('/',(req,res,next)=>{
//     res.send('<h1>Hello From Express!</h1>')
// });

sequelize.sync().then(result=>{
  console.log(result);
}).catch(err=>{
  console.log(err);
})

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
