const { Router } = require("express");
const {
  getUser,
  createNewUser,
  getAllUsers,
  modifyUser,
  deleteUser,
} = require("../../controllers/user.controller");
const router = Router();

 // router.post("/register", createNewUser);

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", modifyUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
