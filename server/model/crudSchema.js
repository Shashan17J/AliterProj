const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema(
  {
    ID: {
      type: String,
      required: true,
    },
    FullName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    Age: {
      type: Number,
      required: true,
      min: 0,
      max: 150,
    },
    City: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("crud", crudSchema);
