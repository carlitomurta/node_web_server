const { getMessages } = require("../controllers/messages.controller");
const express = require("express");

const messagesRouter = express.Router();

messagesRouter.get("/", getMessages);

module.exports = messagesRouter;
