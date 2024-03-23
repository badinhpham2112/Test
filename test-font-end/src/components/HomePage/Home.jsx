import logo from '../../assets/img-data.png'
import searchData from '../../assets/image2.png'
import imgNew from '../../assets/image3.png'
import './Home.scss'
import message from '../../assets/chat.png'

import imgName from '../../assets/name.png'
const Home = () => {
    return(
        <>
            <div className="container-main-home_body">
                <div className="text-title">Save your data storage here.</div>
                <div className='text-img'>
                
                    <div className='text-button'>
                        
                        <p className='text'>Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.
                        </p>

                        <button className="btn-home">Learn more</button>

                    </div>
                  
                    <img src={logo} alt="" className='img-data'/>

                </div>

                <div className='feature-list'>
                    {/* <div className='feature-list_title'> */}
                        <span className='feature-list-title_name'>Features</span>
                        <p className='feature-list-title_text'>Some of the features and advantages that we provide
                            for those of you who store data in this Data Warehouse.
                        </p>
                    {/* </div> */}
                </div>
                <div className='feature-list-text_data'>
                    <div className='feature-list-search_data'>
                            <img src={searchData} alt="" className='img-search_data'/>
                            <div className='text-search_data'>
                                <div className='text-search_title'>Search Data</div>
                                <p className='text-search-content'>Don’t worry if your data is very large, the Data Warehoue provides a search engine, 
                                    which is useful for making it easier to find data effectively saving time.</p>
                                
                                <div className='forward'>Learn more 
                                <span>
                                <i className="fa-solid fa-arrow-right-long" style={{width: '30px'}}></i>    
                                </span>
                                </div>
                            </div>
                    </div>

                    <div className='feature-list-new_data'>
                            <img src={imgNew} alt="" className='img-new_data'/>
                            <div className='text-new'>
                                <div className='text-new_title'>24 Hours Access</div>
                                <p className='text-new-content'>Access is given 24 hours a full morning to night and
                                    meet again in the morning, giving you comfort when
                                    you need data when urgent.
                                </p>                                  
                                <div className='forward-new'>Learn more</div>
                            </div>
                    </div>

                </div>


                <div className='feature-list-text_data'>
                    <div className='feature-list-search_data'>
                            <img src={searchData} alt="" className='img-search_data'/>
                            <div className='text-search_data'>
                                <div className='text-search_title'>Search Data</div>
                                <p className='text-search-content'>Don’t worry if your data is very large, the Data Warehoue provides a search engine, 
                                    which is useful for making it easier to find data effectively saving time.</p>
                                
                                <div className='forward'>Learn more 
                                <span>
                                <i className="fa-solid fa-arrow-right-long" style={{width: '30px'}}></i>    
                                </span>
                                </div>
                            </div>
                    </div>

                    <div className='feature-list-new_data'>
                            <img src={imgNew} alt="" className='img-new_data'/>
                            <div className='text-new'>
                                <div className='text-new_title'>24 Hours Access</div>
                                <p className='text-new-content'>Access is given 24 hours a full morning to night and
                                    meet again in the morning, giving you comfort when
                                    you need data when urgent.
                                </p>                                  
                                <div className='forward-new'>Learn more</div>
                            </div>
                    </div>

                </div>

                <div className='text-slides'>
                    <span className='text-slides_title'>Testimonials</span>
                    <div className='slides'>
                        <i class="fas fa-arrow-left"></i>
                        <div className='slides-img_text'>
                            <img src={imgName} alt="" className='img-name_slides'/>
                            <div className='text-slides-personal_information'>
                                <div className='name'>John Fang</div>
                                <div className='email'>wordfaang.com</div>
                                
                               
                                <p className='text-name'>Suspendisse ultrices at diam lectus nullam. 
                                                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. 
                                                            Arcu pulvinar aenean nam laoreet nulla.
                                </p>

                            </div>
                        </div>
                    <i class="fas fa-arrow-right"></i>
                    </div>
                   <div className='dot-slides'>
                    <li className='dot-1'></li>
                    <li></li>
                    <li></li>
                    <li></li>
                   </div>
                </div>
            </div>

            <div className='border'></div>

            <footer className='footer'>
                <div className='block'>
                    <div className='block-1'>
                        <div className='logo-Company_name'>
                            <div className='logo-footer'>
                                <div className='logo-round-footer'></div>
                                <div className='logo-rectangular-footer'></div>
                            </div>
                            <span className='Company-name'>DataWarehouse</span>

                        </div>
                        
                        <span className='address_footer'>Warehouse Society, 234 <br/> Bahagia Ave Street PRBW 29281</span>
                        <span className='email_footer'>info@warehouse.project<br/> 1-232-3434 (Main)</span>
                    
                    </div>

                    <div className='block-2'>
                        <ul>
                            <li className='block-title'>About</li> 
                            <li className='text_block'>Profile</li>
                            <li className='text_block'>Features</li>
                            <li className='text_block'>Careers</li>
                            <li className='text_block'>DW News</li>
                        </ul>
                    </div>

                    <div className='block-3'>
                        <ul>
                           <li className='block-title'>Help</li>
                            <li className='text_block'>Support</li>
                            <li className='text_block'>Sign up</li>
                            <li className='text_block'>Guide</li>
                            <li className='text_block'>Reports</li>
                            <li className='text_block'>Q&A</li>
                        </ul>
                    </div> 


                    <div className='block-4'>
                        <ul>
                            <li className='block-title'>Social Media</li>
                            <div className='img-footer'>
                               <img src="" alt="" className='img-footer_media'/>
                               <img src="" alt="" className='img-footer_media'/>
                               <img src="" alt="" className='img-footer_media'/>
                            </div>
                         
                           
                        </ul>
                    </div>  

                </div>

                <div className='chat-text_footer'>
                    <p className='text-footer_Registration'>© Datawarehouse™, 2020. All rights reserved.
                       Company Registration Number: 21479524.</p>
                    <img src={message} alt=""  className='chat_message'/>
                </div>
              
            
            </footer>

        </>


     
    )
}

export default Home