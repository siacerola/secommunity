const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        producName: {
            type: String,
            required:true
        },
        productType: {
            type: String,
            required:true
        },
        manufacturing: {
            type: String,
            required:true
        },
        imageURL: {
            type:String
        }
    }
)

module.exports = mongoose.model("Products", productSchema)
