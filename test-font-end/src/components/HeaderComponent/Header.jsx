import './Header.scss'
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
const Header = () => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.user.auth)
    // console.log(user)
    const handleLogin = () => {
        navigate('/login')
    }

    const handleProfile = () => {
        navigate('/profile')
    }

    const handleHome = () => {
        navigate('/')
    }

    const handleLogout = () => {
        navigate('/login')
    }

    return(
        <div className={window.location.pathname === '/profile' ?  'hidden' : 'container-main_header'}>
            <div className= 'container-main-header_body'>
                <div
                onClick={handleHome} 
                className='logo'
                >
                    <div className='logo-round'></div>
                    <div className='logo-rectangular'></div>
                </div>

                <div className = 'header_button'>
                    {isLoggedIn ? (
                    <>
                        <button 
                        onClick={handleProfile}
                        className= {window.location.pathname === '/' ?  'button-login' : 'hiddenButton'}>Profile
                        </button>
                        <button 
                        onClick={handleLogout}
                        className= {window.location.pathname === '/' ?  'button-login' : 'hiddenButton'}>Logout
                        </button>
                    </>
                                       
                    ): (
                        <>
                            <button 
                            onClick={handleLogin}
                            className= {window.location.pathname === '/' ?  'button-login' : 'hiddenButton'}>sign In
                            </button>
                        </> 
                    )} 
                  

                 
                </div>
            </div>
           
        </div>
    )
}

export default Header