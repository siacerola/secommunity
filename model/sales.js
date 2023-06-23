const mongoose = require("mongoose")

const salesSchema = new mongoose.Schema(
    {
        salesName: {
            type: String,
            require:true
        },
        noTelp: {
            type: String,
            require:true
        }
    }
)

module.exports = mongoose.model("Sales",salesSchema)