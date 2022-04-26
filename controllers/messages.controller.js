const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "Elon Musk",
  });
}

module.exports = {
  getMessages,
};
