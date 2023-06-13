const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;

// DATABASE CONNECTION
mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

// Exporting models
module.exports = {
  Album: require('./Album')
};

