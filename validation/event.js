const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateEventInput = data => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.start = !isEmpty(data.start) ? data.start : "";
  data.end = !isEmpty(data.end) ? data.end : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  if (Validator.isEmpty(data.start)) {
    errors.start = "Start date is required";
  }

  // if (Validator.toDate(data.start) == null) {
  //   errors.start = "Start date is not a valid date";
  // }

  if (Validator.isEmpty(data.end)) {
    errors.end = "End date is required";
  }

  // if (Validator.toDate(data.end) == null) {
  //   errors.end = "End date is not a valid date";
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
