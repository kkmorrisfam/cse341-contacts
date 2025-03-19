const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contacts");
const { checkRules, validate } = require("../util/validate1");

router.get("/", contactController.getAll);
router.get("/:id", contactController.getOne);
router.post("/", checkRules, validate, contactController.createContact);
router.put("/:id", checkRules, validate, contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;
