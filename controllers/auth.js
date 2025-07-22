const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
const bcrypt = require('bcrypt');


router.get('/sign-up', async (req, res) => {
    res.render('auth/sign-up.ejs')
})

router.post("/sign-up", async (req, res) => {
const userInDataBase = await User.findOne({ username: req.body.username })

if (userInDataBase) {
    return res.send('Username already taken')
}

if (req.body.password !== req.body.confirmPassword) {
    return rawListeners.send('Password and Confirm')
}

const hashedPassword = bcrypt.hashSync(req.body.password, 10)
req.body.password = hashedPassword

const user = await User.create(req.body)

  res.send(`Thanks for signing up ${user.username}`);
});


module.exports = router