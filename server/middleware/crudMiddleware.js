const { body, validationResult } = require("express-validator");
const CRUD = require("../model/crudSchema");

// Middleware to check if ID is unique
exports.checkUniqueID = async (req, res, next) => {
  try {
    const { ID } = req.body;
    const existingUser = await CRUD.findOne({ ID });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "ID must be unique",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Middleware to check if Age is numeric
exports.checkNumericAge = [
  body("Age").isNumeric().withMessage("Age must be numeric"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    next();
  },
];

// Middleware to check if Age is within a specific range
exports.checkAgeRange = (req, res, next) => {
  const { Age } = req.body;
  if (Age <= 150 || Age > 1) {
    return res.status(400).json({
      success: false,
      message: "Age must be between 18 and 60",
    });
  }
  next();
};
