const { findMatchingBooks } = require("../controllers/matchingController");
const router = require("express").Router();

router.post("/find", findMatchingBooks);

module.exports = router;
