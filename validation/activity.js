const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateActivityInput = data => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.startDate = !isEmpty(data.startDate) ? data.startDate : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  if (Validator.isEmpty(data.startDate)) {
    errors.startDate = "Start date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
