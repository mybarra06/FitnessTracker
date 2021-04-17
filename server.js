const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
//might need
// app.use(require("./routes/api.js"));
// app.use(require("./routes/views.js"));
app.use(require("./routes"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});