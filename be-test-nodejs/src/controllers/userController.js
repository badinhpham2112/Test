const UserService = require('../services/UserService')
const createUser = async(req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Mời bạn nhập đủ thông tin'
            })
        }

        const response = await UserService.createUser(req.body)
        console.log('res', response)

        return res.status(200).json(response)


    } catch (error) {
        return res.status(404).json({
            message: error.e
        })
    }

}

const loginUser = async(req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Mời bạn nhập đủ thông tin'
            })
        }

        const response = await UserService.loginUser(req.body)
        return res.status(200).json(response)


    } catch (error) {
        return res.status(404).json({
            message: error.e
        })
    }

}

const refreshToken = async(req, res) => {
    try {
        let token = req.headers.token.split(' ')[1]
        if (!token) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the token is required'
            })
        }
        const response = await UserService.refreshTokenJWTService(token)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(404).json({
            message: error.e
        })

    }
}

const logoutUser = (req, res) => {
    try {
        res.clearCookie('refresh_token')
        return res.status(200).json({
            status: ok,
            message: 'Logout successfully'
        })


    } catch (error) {
        return res.status(404).json({
            message: error.e
        })

    }
}



module.exports = {
    createUser,
    loginUser,
    refreshToken,
    logoutUser

}