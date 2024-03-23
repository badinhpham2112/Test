import './Profile.scss'
import imgEdit from '../../assets/edit.png'
import imgDelete from '../../assets/delete.png'
import { useNavigate } from "react-router-dom";
import { getAllPost } from '../../service/PostUserService';
import { useEffect, useState } from 'react';

const Profile = () => {
    const navigate = useNavigate()
    const [allUser, setAllUser] = useState([])
    const handleHomePage = () => {
        navigate('/')
    }

    useEffect(() => {
        handleGetAllPost()
    }, [])

    const handleGetAllPost = async () => {
        let res = await getAllPost()
        setAllUser(res.data ? res.data : [])

    }
    console.log(allUser)
    return(
        <div className='main-profile'>
        <div className='profile'>
          
            <div className='profile-body'>
                <div className='logo-profile' onClick={handleHomePage}>
                    <div className='logo-round_profile'></div>
                    <div className='logo-rectangular_profile'></div>
                </div>
                <ul>
                    <li>Posts</li>
                    <li>Logout</li>
                </ul>
            </div>

            <div className='list-Post'>
                <div className='search-list_post'>
                    <button className='btn-search-list-post'>Add new</button>
                    <div className='input_srearch'>
                        <input type="text" className='search-title' placeholder='title'/>
                        <input type="text" className='search-tag' placeholder='tags'/>
                    </div>
                </div>

                
            <div className='table-title-tags'>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Tags</th>
                        <th>Actions</th>
                    </tr>
                    {allUser && allUser.length > 0 && allUser.map((item, index) => {
                        console.log(item)
                        return( 
                        <tr key={`post-${index}`}>
                            <td>{item._id}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.tags}</td>
                            <td className='btn-action'>
                                <img src={imgEdit} alt="" />
                                <img src={imgDelete} alt="" />
                            </td>
                        </tr>
                        )
                      })}
                  
                    
                </table>

            </div>

             
            </div>

           
        </div>
      

        </div>
    )
}

export default Profile