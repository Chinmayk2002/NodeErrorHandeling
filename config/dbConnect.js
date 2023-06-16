const mongoose = require("mongoose");
//connect to mongoDB using async await
const connectDB = async () => {
  try {
    mongoose.connect(
      "url"
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
connectDB();
