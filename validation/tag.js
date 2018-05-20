const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateTagInput = data => {
  let errors = {};

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
