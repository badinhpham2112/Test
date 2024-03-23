import { useEffect, useState } from 'react'
import './Login.scss'
import { login } from '../../service/UserSevice'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { fetLoginUser } from '../../redux/slices/userSlice';
const Login = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.auth)
    useEffect(()=>{
        let token = localStorage.getItem('token');
        if(token){
            navigate("/")
        }
    })

    useEffect(() => {
        if(user && user.auth === true){
            navigate('/')
        }
    }, [user])
    
    const handleLogin = async () => {
        dispatch(fetLoginUser(name))
    }
    return(
            <div className="form-login">
                <span className='login_title'>Sign In</span>
                <span className='name'>Username</span>
                <input 
                value={name}
                onChange={(event) => setName(event.target.value)}
                className='input-login' 
                type="text" />
                <button
                onClick={() => handleLogin(name)} 
                className='login'>Sign In</button>
            </div>

        // </div>
     
    )
}

export default Login