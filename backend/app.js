const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const drinksRouter = require("./routes/drinkRoutes");
const cocktailsRouter = require("./routes/cocktailsRoutes");

dotenv.config({ path: "./config.env" });

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

//MONGO DB ATLAS PASSWORD CHECKING
const DB = process.env.DATABASE_MONGOSHELL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

//MONGO DB CONNECTION STRING
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    family: 4,
  })
  .then((con) => console.log("DB Connection successful!"));

//PORT & It's ERROR HANDLER
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDIER REJECTION: Shutting down... ");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
