const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const drinksRouter = require("./routes/drinkRoutes");
const cocktailsRouter = require("./routes/cocktailsRoutes");

const app = express();
app.use(cors());
// MIDDLEWARES
app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString;
  next();
});

// COMMON ROUTES
app.use("/api/v1/drinks", drinksRouter);
app.use("/api/v1/cocktails", cocktailsRouter);

module.exports = app;
