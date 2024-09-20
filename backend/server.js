const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
// PORT
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => console.log("DB connection successful"))
  .catch((error) => console.error("DB connection error:", error));

app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
