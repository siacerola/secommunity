const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
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
        imageURL: String,
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Role"
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("User", userSchema)
