const express = require('express')
const router = express.Router()

const {
    userRegistration,
    getAllUsers,
    getUserProfile
} = require('./controller')

router.get('/', getAllUsers)
router.get('/:id', getUserProfile)
router.post('/', userRegistration)

module.exports = router