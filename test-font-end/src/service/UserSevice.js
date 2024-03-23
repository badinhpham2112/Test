import axios from 'axios'

const login = (name) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/user/login`, { name })
}

export { login }