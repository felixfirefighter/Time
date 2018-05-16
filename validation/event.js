const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateEventInput = data => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.start = !isEmpty(data.start) ? data.start : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  if (Validator.isEmpty(data.start)) {
    errors.start = "Start date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
