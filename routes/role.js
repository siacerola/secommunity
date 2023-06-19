const express = require("express")
const router = express.Router()
const roleController = require("../controllers/role")

router.use(express.json())

router.use((req, res, next) => {
    console.log("time: ", Date.now());
    next()
})

router.route("/")
    .post(roleController.createRole)
    .get(roleController.getRole)

router.route("/:id")
    .get(roleController.getRoleDetail)
    .patch(roleController.updateRole)
    .delete(roleController.deleteRole)

module.exports = router