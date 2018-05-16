const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  desc: {
    type: String
  },
  start: {
    type: Date,
    require: true
  },
  end: {
    type: Date
  }
});

module.exports = Event = mongoose.model("event", EventSchema);
