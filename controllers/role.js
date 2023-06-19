const Role = require("../model/role")

async function createRole(req, res) {
    const roleName = req.body.roleName

    const newRole = new Role()
    newRole.roleName = roleName
    
    try {
        await Role.create(newRole)
    } catch (error) {
        console.log(error);
    }

    res.status(200).json(newRole)
}

async function getRole(req, res) {
    const queryFind = {}
    const doc = await Role.find(queryFind)
        .select("_id roleName")
        .lean()
    
    res.status(200).json(doc)
}

async function getRoleDetail(req, res) {
    const { id } = req.params

    const doc = await Role.findById(id)
        .select("_id roleName")
        .lean()
    
    res.status(200).json(doc)
}

async function updateRole(req, res) {
    const { id } = req.params
    
    const roleName = req.body.roleName

    const doc = await Role.findById(id)
    doc.roleName = roleName
    
    try {
        await doc.save()
    } catch (error) {
        console.log(error);
    }

    res.status(200).json(doc)
}

async function deleteRole(req, res) {
    const { id } = req.params

    const doc = await Role.findByIdAndDelete(id)

    res.status(200).json(doc)
}

module.exports = {
    createRole: createRole,
    getRole: getRole,
    getRoleDetail: getRoleDetail,
    updateRole: updateRole,
    deleteRole:deleteRole
}