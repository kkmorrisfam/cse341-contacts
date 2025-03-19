const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contacts");

const validate = require("../util/validate");

router.get("/", contactController.getAll);
router.get("/:id", contactController.getOne);

router.post(
  "/",
  validate.checkRules(),
  validate.checkErrors,
  contactController.createContact
);
router.put(
  "/:id",
  validate.checkRules(),
  validate.checkErrors,
  contactController.updateContact
);

router.delete("/:id", contactController.deleteContact);

//version 1 - this works, but checkRules as just an array and can cause problems sometimes if data in array is changed.
// Safer to have a function that returns array each time it's called.

// const { checkRules, validate } = require("../util/validate1");
// router.post("/", checkRules, validate, contactController.createContact);
//router.put("/:id", checkRules, validate, contactController.updateContact);

module.exports = router;
