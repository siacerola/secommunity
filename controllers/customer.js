const Customer = require("../model/Customer")

async function createCustomer(req, res) {
    
    const {
        name,
        email,
        password,
        noTelp,
        imageURL
    } = req.body

    const newCustomer = new Customer()
    newCustomer.name = name
    newCustomer.email = email
    newCustomer.password = password
    newCustomer.noTelp = noTelp
    newCustomer.imageURL = imageURL

    try {
        await Customer.create(newCustomer)

    } catch (error) {
        console.log(error);
    }

    res.status(200).json(newCustomer)
}

async function getCustomer(req, res) {
    
    const queryFind={}
    
    const doc = await Customer.find(queryFind)
        .select("_id name email password noTelp imageURL")
        .lean()

    res.status(200).json(doc)
}

async function getCustomerDetial(req, res) {
    const { id } = req.params

    const doc = await Customer.findById(id)
    .select("_id name email password noTelp imageURL")
    .lean()

    res.status(200).json(doc)
}

async function updateCustomer(req, res) {
    const { id } = req.params

    const {
        name,
        email,
        password,
        noTelp,
        imageURL
    } = req.body

    const doc = await Customer.findById(id)
    doc.name = name
    doc.email = email
    doc.password = password
    doc.noTelp = noTelp
    doc.imageURL = imageURL
    
    try {
        await doc.save()
    } catch (error) {
        console.log(error);
    }

    res.status(200).json(doc)
}

async function deleteCustomer(req, res) {
    const { id } = req.params

    const doc = await Customer.findByIdAndDelete(id)

    res.status(200).json(doc)
}

module.exports = {
    createCustomer: createCustomer,
    getCustomer: getCustomer,
    getCustomerDetial: getCustomerDetial,
    updateCustomer: updateCustomer,
    deleteCustomer:deleteCustomer
    
}