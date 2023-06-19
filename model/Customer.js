const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true
        },
        email: {
            type: String,
            required:true
        },
        password: {
            type: String,
            required:true
        },
        noTelp: String,
        imageURL:String
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Customer",customerSchema)