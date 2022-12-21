const app = require("../../../server")
const User = app.models.User

const register = async (req, res) => {
    const { id, email, password, name } = req.body
    const isUserExist = await User.find({ where: { email } }, (err, data) => {
        if (err) {
            return res.status(500).json({ msg: console.err.message })
        }
        return data
    })

    if (isUserExist) {
        return res.status(401).json({ msg: "User already exist" })
    }

    const user = await User.create({ id, email, name, password })
    console.log(user)

}


const login = async (req, res) => {
    const { email, password } = req.body

}

module.exports = { login, register }