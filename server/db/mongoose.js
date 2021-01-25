const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/music-quiz", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});