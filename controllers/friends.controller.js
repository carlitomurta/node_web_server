const friends = require("../models/friends.model");

function getFriends(req, res) {
  res.json(friends);
}

function getFriendById(req, res) {
  const friendId = +req.params.friendId; // plus sign on first converts to number
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json("Friend not found");
  }
}

function createFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);
  res.json(newFriend);
}

module.exports = {
  getFriends,
  getFriendById,
  createFriend,
};
