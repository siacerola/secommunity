const express = require("express")
const router = express.Router()
const salesController = require("../controllers/sales")

router.use(express.json())

router.use((req, res, next) => {
    console.log("time: ", Date.now());
    next()
})

router.route("/")
    .post(salesController.createSales)
    .get(salesController.getSales)

router.route("/:id")
    .get(salesController.getSalesDetail)
    .patch(salesController.updateSales)
    .delete(salesController.deteleSales)

module.exports = router
