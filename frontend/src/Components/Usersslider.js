// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
    //   pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, // Change slide every 3 seconds
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
      }}
    
    >
     

     <SwiperSlide>
     <div className='card position-relative'>
                <div className='d-flex align-items-center'>

                  <div className='img'>
                    <img src='homeimages/teamimg2.jpg' className='img1' alt='member' />
                  </div>

                  <div className='input2'>
                    <h3>Lisa Sauermann</h3>
                    <span>Mathematician</span>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>


              </div>
      </SwiperSlide>
      
      <SwiperSlide>
     <div className='card position-relative'>
                <div className='d-flex align-items-center'>

                  <div className='img'>
                    <img src='homeimages/teamimg3.jpg' className='img1' alt='member' />
                  </div>

                  <div className='input2'>
                    <h3>Lisa Sauermann</h3>
                    <span>Web Developer</span>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>


              </div>
      </SwiperSlide>
      
      <SwiperSlide>
     <div className='card position-relative'>
                <div className='d-flex align-items-center'>

                  <div className='img'>
                    <img src='homeimages/teamimg1.jpg' className='img1' alt='member' />
                  </div>

                  <div className='input2'>
                    <h3>David Gale</h3>
                    <span>Software Engineer</span>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>


              </div>
      </SwiperSlide>
     

      <SwiperSlide>
     <div className='card position-relative'>
                <div className='d-flex align-items-center'>

                  <div className='img'>
                    <img src='homeimages/teamimg4.jpg' className='img1' alt='member' />
                  </div>

                  <div className='input2'>
                    <h3>Matte Devan</h3>
                    <span>American Actor</span>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>


              </div>
      </SwiperSlide>

      <SwiperSlide>
     <div className='card position-relative'>
                <div className='d-flex align-items-center'>

                  <div className='img'>
                    <img src='homeimages/teamimg5.jpg' className='img1' alt='member' />
                  </div>

                  <div className='input2'>
                    <h3>Jason Momoa</h3>
                    <span>Mathematician</span>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>


              </div>
      </SwiperSlide>

    </Swiper>
  );
};