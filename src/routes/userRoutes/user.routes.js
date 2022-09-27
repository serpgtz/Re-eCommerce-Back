const { Router } = require("express");
const {
  getUser,
  createNewUser,
  getAllUsers,
  modifyUser,
  deleteUser,
  getUserByQuery,
} = require("../../controllers/user.controller");
const router = Router();

router.post("/register", createNewUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.get("users", getUserByQuery);
router.put("/users/:id", modifyUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
