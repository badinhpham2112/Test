import './Profile.scss'
import imgEdit from '../../assets/edit.png'
import imgDelete from '../../assets/delete.png'
import { useNavigate } from "react-router-dom";
import { getAllPost, createPost, EditPost , DeletePost} from '../../service/PostUserService';
import { logout } from '../../service/UserSevice';
import { useEffect, useState } from 'react';
import Modal from '../ModalComponents/Modal';



const Profile = () => {
    const navigate = useNavigate()
    const [allUser, setAllUser] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState([''])
    const [isModalOpen, setModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [idEdit, setIdEdit] = useState({})
    const [idDelete, setIdDelete] = useState({})
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
    

    const handleOpenModal = () => {
      setModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setModalOpen(false)
    }

    const handleEditOpenModal = (item) => {
        if(item){
            setTitle(item.title)
            setTags(item.tags)
            setDescription(item.description)
        }
        setIdEdit(item)
        setEditModalOpen(true);
      };
    
      
    const handleEditCloseModal = () => {
        setEditModalOpen(false)
    }
  
    const handleDeleteOpenModal = (item) => {
         setIdDelete(item)
        setDeleteModalOpen(true);
      };
      
    const handleDeleteCloseModal = () => {
        setDeleteModalOpen(false)
    }

    const handleAddNew = async () => {
        let res = await createPost(title, description, tags)
        console.log(res)
        setTitle('')
        setDescription('')
        setTags('')
        handleGetAllPost()
        handleCloseModal()

    }

    const handleEdit = async (idEdit) => {
        let res = await EditPost(idEdit._id, title, description, tags)
        console.log(res)
        setTitle('')
        setDescription('')
        setTags('')
        handleGetAllPost()
        handleEditCloseModal()
    }

    const handleDelete = async (idDelete) => {
        let res = await DeletePost(idDelete._id)
        handleGetAllPost()
        handleDeleteCloseModal()
    }

    const handleLogout = async () => {
        await logout()
        

    }
 
    
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
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </div>

            <div className='list-Post'>
                <div className='search-list_post'>
                    <button
                    onClick={handleOpenModal} 
                    className='btn-search-list-post'>Add new</button>
                     <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <h1>ADD NEW</h1>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span style={{margin: '10px 0px 10px 0', fontSize: '17px', fontFamily: 'none'}}>Title</span>
                            <input
                            value={title}
                            onChange={(event) => setTitle(event.target.value)} 
                            type="text"
                            style={{padding: '10px'}}/>
                            <span 
                            style={{margin: '10px 0px 10px 0', fontSize: '17px', fontFamily: 'none'}}>
                                description
                            </span>
                            <input
                            value={description} 
                            onChange={(event) => setDescription(event.target.value)}
                            type="text" name="" id="" style={{padding: '10px'}} />
                            <span style={{margin: '10px 0px 10px 0', fontSize: '17px', fontFamily: 'none'}}>tags</span>
                            <input
                            value={tags}
                            onChange={(event) => setTags(event.target.value)} 
                            type="text" name="" id="" style={{padding: '10px'}} />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'end', padding: '30px 0px', gap: 20}}>

                            <button
                            onClick={() => handleAddNew()} 
                            style={{padding: '10px 26px', 
                            borderRadius: '10px', border: 'none', outline: 'none', 
                            color: 'White', fontWeight: 600, background: '#9C69E2'}}>Add new</button>
                            <button
                            onClick={handleCloseModal} 
                            style={{padding: '10px 26px', 
                            borderRadius: '10px', border: 'none', outline: 'none', 
                            color: 'White', fontWeight: 600, background: '#3b3d3e'}}>Close</button>
                        </div>
                        
                     </Modal>
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
                        return(   
                        <tr key={`post-${index}`}>
                            <td>{item._id}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.tags}</td>
                            <td className='btn-action'>
                                <img src={imgEdit} alt="" onClick={() => handleEditOpenModal(item)}/>
                                <img src={imgDelete} alt="" onClick={() => handleDeleteOpenModal(item)} />
                            </td>
                        </tr>
                        )
                      })}
                    
                </table>
                <Modal isOpen={isEditModalOpen} onClose={handleEditCloseModal}>
                    <h1>EDIT</h1>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span 
                        style={{margin: '10px 0px 10px 0', fontSize: '17px', fontFamily: 'none'}}>
                            Title
                        </span>
                        <input
                        value={title}
                        onChange={(event) => setTitle(event.target.value)} 
                        type="text"
                        style={{padding: '10px'}}/>
                        <span 
                        style={{margin: '10px 0px 10px 0', fontSize: '17px', fontFamily: 'none'}}>
                            description
                        </span>
                        <input
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)}
                        type="text" name="" id="" style={{padding: '10px'}} />
                        <span style={{margin: '10px 0px 10px 0', fontSize: '17px', fontFamily: 'none'}}>
                            tags
                        </span>
                        <input
                        value={tags}
                        onChange={(event) => setTags(event.target.value)} 
                        type="text" name="" id="" style={{padding: '10px'}} />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'end', padding: '30px 0px', gap: 20}}>
                        <button
                        onClick={() => handleEdit(idEdit)} 
                        style={{padding: '10px 26px', 
                        borderRadius: '10px', border: 'none', outline: 'none', 
                        color: 'White', fontWeight: 600, background: '#9C69E2'}}>Edit</button>
                        <button
                        onClick={handleEditCloseModal} 
                        style={{padding: '10px 26px', 
                        borderRadius: '10px', border: 'none', outline: 'none', 
                        color: 'White', fontWeight: 600, background: '#3b3d3e'}}>Close</button>
                    </div>
                
                </Modal>

                <Modal isOpen={isDeleteModalOpen} onClose={handleDeleteCloseModal}>
                    <h1>DELETE</h1>
                    <div> Bạn có chắc muốn xóa <b>TITLE</b> này chứ <b>{idDelete.title}</b>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'end', padding: '30px 0px', gap: 20}}>
                        <button
                        onClick={() => handleDelete(idDelete)} 
                        style={{padding: '10px 26px', 
                        borderRadius: '10px', border: 'none', outline: 'none', 
                        color: 'White', fontWeight: 600, background: '#9C69E2'}}>Delete</button>
                        <button
                        onClick={handleDeleteCloseModal} 
                        style={{padding: '10px 26px', 
                        borderRadius: '10px', border: 'none', outline: 'none', 
                        color: 'White', fontWeight: 600, background: '#3b3d3e'}}>Close</button>
                    </div>
                
                </Modal>
            </div>
 
            </div>  
        </div> 
  </div>
    )
}

export default Profile