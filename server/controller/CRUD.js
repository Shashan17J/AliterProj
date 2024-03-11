const CRUD = require("../model/crudSchema");
require("dotenv").config();

exports.createUser = async (req, res) => {
  try {
    const { ID, FullName, Age, City } = req.body;

    // Validation
    if (!ID || !FullName || !Age || !City) {
      return res.status(403).send({
        success: false,
        message: "All field are required",
      });
    }

    const user = await CRUD.create({
      ID,
      FullName,
      Age,
      City,
    });

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.readUser = async (req, res) => {
  try {
    const ID = req.body;

    // Validation
    if (!ID) {
      return res.status(403).send({
        success: false,
        message: "ID field is required",
      });
    }

    const userDetails = await CRUD.findOne(ID);

    return res.status(200).json({
      success: true,
      message: "User detail fetched successfully",
      data: {
        ID: userDetails.ID,
        FullName: userDetails.FullName,
        Age: userDetails.Age,
        City: userDetails.City,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { ID, FullName, Age, City } = req.body;

    // Validation
    if (!ID || !FullName || !Age || !City) {
      return res.status(403).send({
        success: false,
        message: "All fields are required",
      });
    }
    const updatedUser = await CRUD.findOneAndUpdate(
      { ID },
      { FullName, Age, City },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { ID } = req.body;

    // Validation
    if (!ID) {
      return res.status(403).send({
        success: false,
        message: "ID is required",
      });
    }

    const user = await CRUD.findOneAndDelete(ID);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
