const express = require("express")
const router = express.Router()
const userController = require("../controllers/user")

router.use(express.json())

router.use((req, res, next) => {
  console.log("time: ", Date.now());
  next()
})

router.route("/")
  .post(userController.createUser)
  .get(userController.getUser)

module.exports = router;
