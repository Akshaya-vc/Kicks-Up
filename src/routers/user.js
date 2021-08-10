const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/signUp', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send('SignUp unsuccessful')
    }
})

router.post('/logIn', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/logOut', auth, async(req, res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e){
        res.status(500).send('LogOut unsucessfull')
    }
})

router.get('/Profile', auth, async(req, res) => {
    res.send(req.user);
})

module.exports = router
