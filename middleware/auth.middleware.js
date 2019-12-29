const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS'){
        return next()
    }
    try{
        const token = req.headers.authorization.split( ' ')[1]  //Parsing string to arr and get 1 point
        if(!token) {
            return res.status(401).json({ message: 'No have authorization' })
        }
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded  //create user with decoded token
        next()
    }
    catch (e) {
        res.status(401).json({ message: 'No have authorization' })
    }
}