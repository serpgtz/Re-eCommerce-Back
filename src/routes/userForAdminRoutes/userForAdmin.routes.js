const { Router } = require("express");
const {
  getUser,
  getAllUsers,
  modifyUser,
  deleteUser,
} = require("../../controllers/userForAdmin.controller");

const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", modifyUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
