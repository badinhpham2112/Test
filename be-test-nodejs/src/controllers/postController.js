const postService = require('../services/postService')
const createPost = async(req, res) => {
    try {
        const { title, description, tags } = req.body

        if (!title || !description || !tags) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Mời bạn nhập đủ thông tin'
            })
        }

        const response = await postService.createPost(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(404).json({
            message: error.e
        })

    }
}
const updatePost = async(req, res) => {
    try {
        const postId = req.params.id
        const data = req.body
        if (!postId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'mời bạn xem lại id'
            })
        }
        const response = await postService.updatePost(postId, data)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(404).json({
            message: error.e
        })

    }

}

const deletePost = async(req, res) => {
    try {
        const postId = req.params.id;
        if (!postId) {
            return res.status.json({
                status: 'ERR',
                message: 'id rỗng'
            })
        }
        const response = await postService.deletePost(postId)
        return res.status(200).json(response)


    } catch (error) {
        return res.status(404).json({
            message: error.e
        })

    }

}

const getAllPost = async(req, res) => {
    try {
        const response = await postService.getAllPost();
        return res.status(200).json(response)

    } catch (error) {
        return res.status(404).json({
            message: error.e
        })

    }

}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getAllPost
}