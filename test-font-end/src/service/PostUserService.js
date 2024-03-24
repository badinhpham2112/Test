import axios from 'axios'
export const getAllPost = async() => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/post/get-all`)
    return res.data
}

export const createPost = async(title, description, tags) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/post/create`, { title, description, tags })
    return res.data
}

export const EditPost = async(id, title, description, tags) => {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/post/update/${id}`, { title, description, tags })
    return res.data
}

export const DeletePost = async(id) => {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/post/delete/${id}`)
    return res.data
}