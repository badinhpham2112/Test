import axios from 'axios'
export const getAllPost = async() => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/post/get-all`)

}