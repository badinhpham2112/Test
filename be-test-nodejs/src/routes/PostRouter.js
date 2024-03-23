const express = require('express');
const router = express.Router()
const postController = require('../controllers/postController');
const { authMiddleware } = require('../middleware/auth')

router.post('/create', postController.createPost)
router.put('/update/:id', postController.updatePost)
router.delete('/delete/:id', postController.deletePost)
router.get('/get-all', postController.getAllPost)

module.exports = router