const Sales = require("../model/sales")

async function createSales(req, res) {
    const { salesName, noTelp } = req.body
    
    const newSales = new Sales()
    newSales.salesName = salesName
    newSales.noTelp = noTelp
    
    try {
        await Sales.create(newSales)
    } catch (error) {
        console.log(error);
    }
    res.status(200).json(newSales)
}

module.exports = {
    createSales:createSales
}