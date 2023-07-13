const User = require("../model/Users");

// Get All products
const user_all = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single user
const user_details = async (req, res) => {
    try {
        const user = await User.findOne({'user_id':req.body.user_id});
        res.json(user);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New user
const user_create = async (req, res) => {
    const user = new User({
      user_id: req.body.user_id,
      name: req.body.name,
      email: req.body.email
      });
    
      try {
        const savedUser = await user.save();
        res.send(savedUser);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update user
const user_update = async (req, res) => {
    try {
        const user = {
          user_id: req.body.user_id,
          name: req.body.name,
          email: req.body.email
        };
        const updateduser = await User.updateOne({'user_id':req.body.user_id},user);
        res.json(updateduser);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete user
const user_delete = async (req, res) => {
    try {
        const removeUser = await User.deleteOne({'user_id':req.body.user_id});
        res.json(removeUser);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    user_all,
    user_details, 
    user_create,
    user_update,
    user_delete
  }