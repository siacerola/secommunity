const Product = require("../model/products")

async function createProduct(req, res) {
    const {
        productName,
        productType,
        manufacturing,
        imageURL
    } = req.body

    const newProduct = new Product()
    newProduct.producName = productName
    newProduct.productType = productType
    newProduct.manufacturing = manufacturing
    newProduct.imageURL = imageURL
    
    try {
        await Product.create(newProduct)
    } catch (error) {
        console.log(error);
    }

    res.status(200).json(newProduct)
}

module.exports = {
    createProduct: createProduct
    
}