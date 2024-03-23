
import Home from "../components/HomePage/Home";
import Login from "../components/LoginPage/Login";

import { Router, Routes, Route } from 'react-router-dom';
import Profile from "../components/Profile/Profile";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element = {<Home/>}/>          
                <Route path='/login' element={ <Login/> }/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </>     

    )
  
}
export default AppRoutes