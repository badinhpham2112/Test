const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const authMiddleware = (req, res, next) => {
    const token = req.headers.token && req.headers.token.split(' ')[1];
    console.log('token: ', token)
    if (!token) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
        console.log(user.nam)

        if (user.name) {
            next()
        } else {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
    });

}


module.exports = {
    authMiddleware
}