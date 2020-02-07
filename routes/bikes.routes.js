const {Router} = require('express')
const config = require('config')
const shortid = require('shortid')
const Link = require('../models/Link')
const auth = require('../middleware/auth.middleware')
const router = Router()

//Get all links
router.get('/', auth, async (req, res) => {
    try{
        const links = await Link.find({ owner: req.user.userId })
        res.json(links)

    } catch (e) {
        res.status(500).json({ message: 'Something going is wrong' })
    }
})


//Get simple link by ID
router.get('/:id', auth, async (req, res) => {
    try{
        const link = await Link.findById( req.params.id )
        res.json(link)
    } catch (e) {
        res.status(500).json({ message: 'Error getting id ' })
    }
})

module.exports = router
