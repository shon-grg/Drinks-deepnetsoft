const mongoose = require("mongoose");

const cocktailsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A cocktails must have a name"],
  },
  description: {
    type: String,
    require: [true, "A cocktails must have a description"],
  },
  price: {
    type: Number,
    require: [true, "A cocktails must have a price"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Cocktails = mongoose.model("Cocktails", cocktailsSchema);

module.exports = Cocktails;
