import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'; 
import 'swiper/css/pagination';

export default () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch news data
    axios.get('http://localhost:5000/team')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      setError(error.message);
    });

}, []);

  return (
     <>
    <Swiper
      modules={[ Autoplay, Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000, // Change slide every 3 seconds
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
      }}
      breakpoints={{
        475: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
       
        1200: {
          slidesPerView: 4,
        },
      }}

    >

      {
        data &&  data.map((item, index) => (
          <SwiperSlide key={index}>
                <div className="team-member">
                    <img
                    //  src={item.image} 
                    src={require(`/public/teamimg/${item.image}`)}
                     className='img ' alt='team-member1' />
                    <div className="team-info">
                      <h5 className="member1-title m-0">{item.title}</h5>
                      <p className="member1-text m-0">{item.role}</p>
                    </div>

                    <div className='content'>
                      <div className='d-flex justify-content-center'>
                        <Link><i className='fa-brands fa-facebook'></i></Link>
                        <Link><i className='fa-brands fa-twitter'></i></Link>
                        <Link><i className='fa-brands fa-linkedin'></i></Link>
                        <Link><i className='fa-brands fa-whatsapp'></i></Link>
                      </div>
                      
                    <p dangerouslySetInnerHTML={{ __html: item.description}} />
                    </div>
                  </div>
          </SwiperSlide>

        ))
      }
        

      {/* <SwiperSlide>
      <div className="team-member">
                <img src='homeimages/teamimg2.jpg' className='img' alt='team-member2' />
                <div className="team-info">
                  <h5 className="member2-title">Josh Buttler</h5>
                  <p className="member2-text m-0">CEO & FOUNDER</p>
                </div>

                <div className='content'>
                  <div className='d-flex justify-content-center'>
                    <Link><i className='fa-brands fa-facebook'></i></Link>
                    <Link><i className='fa-brands fa-twitter'></i></Link>
                    <Link><i className='fa-brands fa-linkedin'></i></Link>
                    <Link><i className='fa-brands fa-whatsapp'></i></Link>

                  </div>
                  
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="team-member">
                <img src='homeimages/teamimg3.jpg' className='img' alt='team-member3' />
                <div className="team-info">
                  <h5 className="member3-title">Janny Codller</h5>
                  <p className="member3-text m-0">Web Developer</p>
                </div>

                <div className='content'>
                  <div className='d-flex justify-content-center'>
                    <Link><i className='fa-brands fa-facebook'></i></Link>
                    <Link><i className='fa-brands fa-twitter'></i></Link>
                    <Link><i className='fa-brands fa-linkedin'></i></Link>
                    <Link><i className='fa-brands fa-whatsapp'></i></Link>

                  </div>
                  
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="team-member">
                <img src='homeimages/teamimg4.jpg' className='img' alt='team-member4' />
                <div className="team-info">
                  <h5 className="member4-title">Jason Statham</h5>
                  <p className="member4-text m-0">UI/UX Designer</p>
                </div>

                <div className='content'>
                  <div className='d-flex justify-content-center'>
                    <Link><i className='fa-brands fa-facebook'></i></Link>
                    <Link><i className='fa-brands fa-twitter'></i></Link>
                    <Link><i className='fa-brands fa-linkedin'></i></Link>
                    <Link><i className='fa-brands fa-whatsapp'></i></Link>

                  </div>
                  
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="team-member">
                <img src='homeimages/teamimg5.jpg' className='img' alt='team-member5' />
                <div className="team-info">
                  <h5 className="member5-title">Corey Anderson</h5>
                  <p className="member5-text m-0">Project Manager</p>
                </div>

                <div className='content'>
                  <div className='d-flex justify-content-center'>
                    <Link><i className='fa-brands fa-facebook'></i></Link>
                    <Link><i className='fa-brands fa-twitter'></i></Link>
                    <Link><i className='fa-brands fa-linkedin'></i></Link>
                    <Link><i className='fa-brands fa-whatsapp'></i></Link>

                  </div>
                  
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
      </SwiperSlide>
      

      <SwiperSlide>
      <div className="team-member">
                <img src='homeimages/teamimg1.jpg' className='img' alt='team-member1' />
                <div className="team-info">
                  <h5 className="member1-title">Alex Maxwel</h5>
                  <p className="member1-text m-0">Marketing Manager</p>
                </div>

                <div className='content'>
                  <div className='d-flex justify-content-center'>
                    <Link><i className='fa-brands fa-facebook'></i></Link>
                    <Link><i className='fa-brands fa-twitter'></i></Link>
                    <Link><i className='fa-brands fa-linkedin'></i></Link>
                    <Link><i className='fa-brands fa-whatsapp'></i></Link>

                  </div>
                  
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="team-member">
                <img src='homeimages/teamimg2.jpg' className='img' alt='team-member2' />
                <div className="team-info">
                  <h5 className="member2-title">Josh Buttler</h5>
                  <p className="member2-text m-0">CEO & FOUNDER</p>
                </div>

                <div className='content'>
                  <div className='d-flex justify-content-center'>
                    <Link><i className='fa-brands fa-facebook'></i></Link>
                    <Link><i className='fa-brands fa-twitter'></i></Link>
                    <Link><i className='fa-brands fa-linkedin'></i></Link>
                    <Link><i className='fa-brands fa-whatsapp'></i></Link>

                  </div>
                  
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="team-member">
                <img src='homeimages/teamimg3.jpg' className='img' alt='team-member3' />
                <div className="team-info">
                  <h5 className="member3-title">Janny Codller</h5>
                  <p className="member3-text m-0">Web Developer</p>
                </div>

                <div className='content'>
                  <div className='d-flex justify-content-center'>
                    <Link><i className='fa-brands fa-facebook'></i></Link>
                    <Link><i className='fa-brands fa-twitter'></i></Link>
                    <Link><i className='fa-brands fa-linkedin'></i></Link>
                    <Link><i className='fa-brands fa-whatsapp'></i></Link>

                  </div>
                  
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="team-member">
                <img src='homeimages/teamimg4.jpg' className='img' alt='team-member4' />
                <div className="team-info">
                  <h5 className="member4-title">Jason Statham</h5>
                  <p className="member4-text m-0">UI/UX Designer</p>
                </div>

                <div className='content'>
                  <div className='d-flex justify-content-center'>
                    <Link><i className='fa-brands fa-facebook'></i></Link>
                    <Link><i className='fa-brands fa-twitter'></i></Link>
                    <Link><i className='fa-brands fa-linkedin'></i></Link>
                    <Link><i className='fa-brands fa-whatsapp'></i></Link>

                  </div>
                  
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="team-member">
                <img src='homeimages/teamimg5.jpg' className='img' alt='team-member5' />
                <div className="team-info">
                  <h5 className="member5-title">Corey Anderson</h5>
                  <p className="member5-text m-0">Project Manager</p>
                </div>

                <div className='content'>
                  <div className='d-flex justify-content-center'>
                    <Link><i className='fa-brands fa-facebook'></i></Link>
                    <Link><i className='fa-brands fa-twitter'></i></Link>
                    <Link><i className='fa-brands fa-linkedin'></i></Link>
                    <Link><i className='fa-brands fa-whatsapp'></i></Link>

                  </div>
                  
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
      </SwiperSlide>
   */}
     
    </Swiper>


    </>
    
  );
};