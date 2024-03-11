const express = require("express");
const router = express.Router();

const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../controller/CRUD");

const {
  checkUniqueID,
  checkNumericAge,
  checkAgeRange,
} = require("../middleware/crudMiddleware");

router.post(
  "/create",
  checkUniqueID,
  checkNumericAge,
  checkAgeRange,
  createUser
);

router.get("/read", readUser);

router.put("/update", updateUser);

router.delete("/delete", deleteUser);

module.exports = router;
