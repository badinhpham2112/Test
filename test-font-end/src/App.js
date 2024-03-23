import { useEffect } from 'react';
import './App.css';
import Header from './components/HeaderComponent/Header';
import {useSelector, useDispatch} from 'react-redux'
import AppRoutes from './routes/AppRoutes';
import { fetLoginUser } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    let token = localStorage.getItem('token')
      if(token){
        dispatch(fetLoginUser(token))
      }

  })



  return (
    <div className="App">
      
      <Header/>
       <AppRoutes/>
    </div>
  );
}

export default App;
