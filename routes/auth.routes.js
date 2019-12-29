const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()


// /api/auth/register
router.post('/register',
    [
        check('email', 'Uncorrected email').isEmail(),
        check('password', 'Minimal length want be more 7 symbols')
            .isLength({ min: 7 })
    ],
    async (req, res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Uncorrected dates from registered'
            })
        }
        const { email, password } = req.body
        const candidate = await User.findOne({ email })

        if(candidate) {
            return res.status(400).json({ message: 'This user already exist' })
        }

        const hashedPass = await bcrypt.hash(password, 12)
        const user = new User({ email, password:hashedPass })

        await user.save()
        res.status(201).json({ message: 'User is created' })

    } catch (e) {
        res.status(500).json({ message: 'Error of registering' })
    }
})

// /api/auth/login
router.post('/login',
    [
        check('email', 'Uncorrected email').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
    ],
    async (req, res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Uncorrected dates from logging'
            })
        }
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({ message: 'User is not defined' })
        }

        const isMatchPassword = await bcrypt.compare(password, user.password)
        if(!isMatchPassword){
            return res.status(400).json({ message: 'Uncorrected password' })
        }
        const token = jwt.sign(
            { userID: user.id },
            config.get('jwtSecret'),
            { expiresIn: '3h' }
        )
        res.json({ token, userID: user.id })

    } catch (e) {
            res.status(500).json({ message: 'Error of registering' })
    }
})

module.exports = router