const {
  getFriends,
  getFriendById,
  createFriend,
} = require("../controllers/friends.controller");
const express = require("express");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("ip address:", req.ip);
  next();
});

friendsRouter.get("/", getFriends);
friendsRouter.get("/:friendId", getFriendById);
friendsRouter.post("/", createFriend);

module.exports = friendsRouter;
