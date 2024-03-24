import './App.css';
import Header from './components/HeaderComponent/Header';
import AppRoutes from './routes/AppRoutes';
// import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";
import {refreshToken} from './service/UserSevice';
import axios from 'axios';
function App() {
  // // axiosClient.interceptors.request.use(async (config) => {

  return (
    <div className="App">
      
      <Header/>
       <AppRoutes/>
    </div>
  );
}

export default App;

