const express = require("express");
const {generateImage} = require("../controllers/openai.controllers")
const router = express.Router();


router.post("/generateimage",generateImage)

module.exports = router; 