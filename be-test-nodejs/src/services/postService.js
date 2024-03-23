const Post = require('../models/PostModel')
const bcrypt = require("bcrypt");

const createPost = (newPost) => {
    return new Promise(async(resolve, reject) => {
        const { title, description, tags } = newPost
        try {
            const newcreatePost = await Post.create({
                title,
                description,
                tags,
            })
            if (newcreatePost) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newcreatePost
                })

            }

        } catch (e) {
            reject(e)

        }

    })
}

const updatePost = (id, data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const checkPost = await Post.findOne({
                _id: id,
            })

            if (checkPost === null) {
                resolve({
                    status: 'OK',
                    message: 'id không xác định'
                })
            }

            const updatePost = await Post.findByIdAndUpdate(id, data, { new: true })

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatePost


            })

        } catch (e) {
            reject(e)

        }
    })
}

const deletePost = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const checkPost = await Post.findOne({
                _id: id,
            })
            if (checkPost === null) {
                resolve({
                    status: 'OK',
                    message: 'id không xác định'
                })
            }

            await Post.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Xóa người dùng thành công'
            })

        } catch (e) {
            reject(e)

        }

    })
}

const getAllPost = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const allPost = await Post.find()
            resolve({
                status: 'OK',
                message: 'Lấy người dùng thành công',
                data: allPost
            })
        } catch (e) {
            reject(e)

        }
    })
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getAllPost
}