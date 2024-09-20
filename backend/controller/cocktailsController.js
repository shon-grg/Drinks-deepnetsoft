const Cocktails = require("../model/cocktailsModel");

// get  all cocktails list
exports.getAllCocktails = async (req, res) => {
  try {
    const cocktails = await Cocktails.find();
    res.status(200).json({
      status: "success",
      results: cocktails.length,
      data: {
        cocktails,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Create cocktails list
exports.createCocktails = async (req, res) => {
  try {
    const newCocktails = await Cocktails.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        cocktails: newCocktails,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

// get one cocktails list
exports.getCocktails = async (req, res) => {
  try {
    const cocktails = await Cocktails.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        cocktails,
      },
    });
  } catch (err) {
    err.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Update cocktails list
exports.updateCocktails = async (req, res) => {
  try {
    const cocktails = await Cocktails.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        cocktails,
      },
    });
  } catch (err) {
    err.status(400).json({
      status: "fail",
      message: console.log(err),
    });
  }
};

// delete cocktails list
exports.deleteCocktails = async (req, res) => {
  try {
    const cocktails = await Cocktails.findByIdAndDelete(req.params.id);
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
