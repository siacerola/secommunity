const express = require("express")
const router = express.Router()
const customerController = require("../controllers/customer")

router.use(express.json())

router.use((req, res, next) => {
    console.log("time: ", Date.now());
    next()
})

router.route("/")
    .post(customerController.createCustomer)
    .get(customerController.getCustomer)

router.route("/:id")
    .get(customerController.getCustomerDetial)
    .patch(customerController.updateCustomer)
    .delete(customerController.deleteCustomer)

module.exports = router