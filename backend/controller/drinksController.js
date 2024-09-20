const Drinks = require("../model/drinksModel");

// get  all Drinks list
exports.getAllDrinks = async (req, res) => {
  try {
    const drinks = await Drinks.find();
    res.status(200).json({
      status: "success",
      results: Drinks.length,
      data: {
        drinks,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Create Drink list
exports.createDrink = async (req, res) => {
  try {
    const newDrink = await Drinks.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        drink: newDrink,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

// get one Drink list
exports.getDrink = async (req, res) => {
  try {
    const drink = await Drinks.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        drink,
      },
    });
  } catch (err) {
    err.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Update Drink list
exports.updateDrink = async (req, res) => {
  try {
    const drink = await Drinks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        drink,
      },
    });
  } catch (err) {
    err.status(400).json({
      status: "fail",
      message: console.log(err),
    });
  }
};

// delete Drink list
exports.deleteDrink = async (req, res) => {
  try {
    const todo = await Drinks.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
