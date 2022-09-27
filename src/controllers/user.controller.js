const User = require("../models/User");

const createNewUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const createdUser = await newUser.save();
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const modifyUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserByQuery = async (req, res) => {
  const username = req.query.username;
  try {
    if (username) {
      const user = await User.find({ username: username.toLowerCase() });
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

const getAllUsers = async (req, res) => {
  // const query = req.query.new;
  try {
    //Sólo en caso de emergencia
    //   const users = query
    //     ? await User.find().sort({ _id: -1 }).limit(5)
    //     : await User.find();
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("USER DELETED");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createNewUser,
  modifyUser,
  getUser,
  getAllUsers,
  deleteUser,
  getUserByQuery,
};
