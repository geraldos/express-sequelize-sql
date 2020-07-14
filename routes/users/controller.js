const {
    User
} = require('../../models')

module.exports = {
    userRegistration: async (req, res) => {
        const {
            full_name,
            email,
            password
        } = req.body

        try {
            const result = await User.create({
                full_name,
                email,
                password
            })
            res.send({
                message: `Registration successfull`,
                result: result
            })
        } catch (error) {
            res.send(error)
        }
    }
}