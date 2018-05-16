const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const events = require("./routes/api/events");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//use route
app.use("/api/events", events);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
