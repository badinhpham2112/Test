const User = require('../models/UserModel')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const createUser = (newUser) => {
    return new Promise(async(resolve, reject) => {
        const { name } = newUser
        try {
            const newcreateUser = await User.create({
                name
            })
            if (newcreateUser) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newcreateUser
                })

            }

        } catch (e) {
            reject(e)

        }

    })
}


const genneralAccessToken = (payload) => {

    const access_token = jwt.sign({
        ...payload
    }, process.env.ACCESS_TOKEN, { expiresIn: '1h' })

    return access_token
}

const genneralRefreshToken = async(payload) => {

    const refresh_token = jwt.sign({
        ...payload
    }, process.env.REFRESH_TOKEN, { expiresIn: '24h' })

    return refresh_token
}


const refreshTokenJWTService = (token) => {
    return new Promise((resolve, reject) => {
        try {

            jwt.verify(token, process.env.REFRESH_TOKEN, async(err, user) => {
                console.log('token:', user)
                if (err) {
                    resolve({
                        status: 'ERR',
                        message: 'The authemtication'
                    })
                }

                const { payload } = user
                const access_token = await genneralAccessToken({
                    name: user.name
                })

                resolve({
                    status: 'OK',
                    message: 'Success',
                    access_token
                })
            })

        } catch (e) {
            reject(e)

        }
    })
}



const loginUser = (newUser) => {
    return new Promise(async(resolve, reject) => {
        const { name } = newUser;
        try {
            const newloginUser = await User.findOne({ name });

            if (!newloginUser) {
                resolve({
                    status: 'ERROR',
                    message: 'Người dùng không tồn tại',
                });
            }
            // const tokens = generateTokens({ name: newloginUser.name })
            const access_token = await genneralAccessToken({
                name: newloginUser.name
            })
            const refresh_token = await genneralRefreshToken({
                name: newloginUser.name
            })


            resolve({
                status: 'OK',
                message: 'Login thành công',
                access_token,
                refresh_token
            });

        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    createUser,
    loginUser,
    refreshTokenJWTService
}