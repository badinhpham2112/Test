import axios from 'axios'

const login = (name) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/user/login`, { name })

}

export const refreshToken = async(refreshToken) => {
    console.log('refreshToken', refreshToken)
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {}, {
        headers: {
            token: `Bearer ${refreshToken}`,
        }
    })
    return res.data
}

export const logout = () => {
    const res = axios.post(`${process.env.REACT_APP_API_URL}/user/logout`)
    return res.data
}

export { login }