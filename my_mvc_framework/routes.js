const express = require("express");
const router = express.Router();
const Users = require(`./_controllers/users`);
const UsersController = new Users();

console.log(UsersController);
router.get("/", UsersController.index);
router.post('/result', UsersController.result);

module.exports = router;