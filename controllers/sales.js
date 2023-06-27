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

async function getSales(req, res) {
    const queryFind = {}
    const doc = await Sales.find(queryFind)
        .select("_id salesName")
        .lean()
    
    res.status(200).json(doc)
}

async function getSalesDetail(req, res) {
    const { id } = req.params
    
    const doc = await Sales.findById(id)
        .select("_id salesName noTelp")
        .lean()
    
    res.status(200).json(doc)
}

async function updateSales(req, res) {
    const { id } = req.params
    const { salesName, noTelp } = req.body
    
    const doc = await Sales.findById(id)
    doc.salesName = salesName
    doc.noTelp = noTelp
    
    try {
        await doc.save()
    } catch (error) {
        console.log(error);
    }

    res.status(200).json(doc)
}

async function deteleSales(req, res) {
    const { id } = req.params
    const doc = await Sales.findByIdAndDelete(id)

    res.status(200).json(doc)
}

module.exports = {
    createSales: createSales,
    getSales: getSales,
    getSalesDetail: getSalesDetail,
    updateSales: updateSales,
    deteleSales:deteleSales
}