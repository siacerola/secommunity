const User = require("../model/user")

async function createUser(req, res) {
    const {
        name,
        email,
        password,
        noTelp,
        imageURL,
        role
    } = req.body

    const newUser = new User()
    newUser.name = name
    newUser.email = email
    newUser.password = password
    newUser.noTelp = noTelp
    newUser.imageURL = imageURL
    newUser.role = role
    
    try {
        await User.create(newUser)
    } catch (error) {
        console.log(error);
    }

    res.status(200).json(newUser)
}

async function getUser(req,res) {
    const queryFind = {}
    
    const doc = await User.find(queryFind)
        .populate("role","roleName -_id")
        .select("_id name email password noTelp imageURL role")
        .exec()
    res.status(200).json(doc)
    
}

async function getUserDetail(req, res) {
    const { id } = req.params
    
    const doc = await User.findById(id)
        .populate("role", "roleName -_id")
        .select("_id name email password noTelp imageURL role")
        .exec()
    res.status(200).json(doc)
}

async function updateUser(req, res) {
    const { id } = req.params
    
    const { name, email, password, noTelp, imageURL, role } = req.body
    
    const doc = await User.findById(id)
    doc.name = name
    doc.email = email
    doc.password = password
    doc.noTelp = noTelp
    doc.imageURL = imageURL
    doc.role = role
    
    try {
        await doc.save()
    } catch (error) {
        console.log(error);
    }

    res.status(200).json(doc)
}

async function deleteUser(req, res) {
    const { id } = req.params

    const doc = await User.findByIdAndDelete(id)

    res.status(200).json(doc)
}

module.exports = {
    createUser: createUser,
    getUser: getUser,
    getUserDetail: getUserDetail,
    updateUser: updateUser,
    deleteUser: deleteUser
}