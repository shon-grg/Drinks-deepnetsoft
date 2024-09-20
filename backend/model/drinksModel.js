const mongoose = require("mongoose");

const drinksSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A drinks must have a name"],
  },
  description: {
    type: String,
    require: [true, "A drinks must have a description"],
  },
  price: {
    type: Number,
    require: [true, "A drink must have a price"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Drinks = mongoose.model("Drinks", drinksSchema);

module.exports = Drinks;
