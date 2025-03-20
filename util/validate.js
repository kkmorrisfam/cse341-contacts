const { check, validationResult } = require("express-validator");

const validate = {};

validate.checkRules = () => {
  console.log("inside checkRules");
  return [
    check("firstName", "First name is required").trim().notEmpty(),
    check("lastName").trim().notEmpty().withMessage("Last name is required"),
    check("email").trim().isEmail().withMessage("Invalid email addrses"),
    check("favoriteColor")
      .trim()
      .notEmpty()
      .withMessage("Favorite Color is required"),
    check("birthday")
      .trim()
      .notEmpty()
      // .matches(/^\d{2}-\d{2}-\d{4}$/)
      .withMessage("Birthday must be in MM-DD-YYYY format"),
  ];
};

validate.checkErrors = (req, res, next) => {
  console.log("inside validate");
  const errors = validationResult(req);
  //if errors is not empty
  if (!errors.isEmpty()) {
    //status 400 = Bad Request
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = validate;
