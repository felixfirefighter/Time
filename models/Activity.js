const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  startDate: {
    type: Date,
    require: true
  },
  endDate: {
    type: Date
  }
});

module.exports = Activity = mongoose.model("activity", ActivitySchema);
