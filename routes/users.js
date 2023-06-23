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

router.route("/:id")
  .get(userController.getUserDetail)
  .patch(userController.updateUser)
  .delete(userController.deleteUser)

module.exports = router;
