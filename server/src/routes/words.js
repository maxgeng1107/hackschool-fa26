const express = require("express");
const { checkWord } = require("../controllers/word.controller");

const router = express.Router();

/** 
 * TODO (Step 1): Create the spell check route
 *  Register a GET route at "/check/:word" that is handled by checkWord
 */ 
router.get("/check/:word", checkWord);

module.exports = router;