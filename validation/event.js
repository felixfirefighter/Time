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

  if (Validator.isEmpty(data.end)) {
    errors.end = "End date is required";
  }

  data.name = !isEmpty(data.name) ? data.name : "";
  data.color = !isEmpty(data.color) ? data.color : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Tag name is required";
  }

  if (Validator.isEmpty(data.color)) {
    errors.color = "Tag color is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
