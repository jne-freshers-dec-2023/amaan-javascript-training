const express = require("express");
const router = express.Router();
const Data = require("../data.json");
//GET all data
router.get("/getAll", (req, res) => {
  res.send(Data.data);
});
//GET request by ID
router.get("/getById/:id", (req, res) => {
  const UserId = req.params.id;
  const filteredUsers = Data.data.filter(
    (user) => user.id === parseInt(UserId)
  );
  if (!filteredUsers.length) {
    return res.status(404).send("User Not Found");
  } else {
    res.send(filteredUsers);
  }
});

// POST request for adding new data
router.post("/add", (req, res, next) => {
  console.log(req);
  const newUser = {
    id: Data.data.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    pincode: req.body.pincode,
    city: req.body.city,
    state: req.body.state,
  };
  Data.data.push(newUser);
  res.send(Data.data);
  console.log(newUser);
});

//PATCH by ID
router.patch("/update/:id", (req, res) => {
  let updUser = Data.data.find((x) => x.id == req.params.id);
  for (let key in req.body) {
    updUser[key] = req.body[key];
  }
  res.send(updUser);
});

//PUT by ID
router.put("/replace/:id", (req, res) => {
  let id = req.params.id;
  //here we use spread operator for creating new object
  let User = { ...req.body, id: parseInt(id) };
  Data.data = [User, ...Data.data.filter((ele) => ele.id !== parseInt(id))];
  res.send(Data.data);
});

//DELETE by ID
router.delete("/remove/:id", (req, res) => {
  // Filter the specified ID from the data array
  Data.data = Data.data.filter((c) => c.id != req.params.id);

  // Send a success message and success status
  res.status(200).send("Deleted");
});
module.exports = router;
