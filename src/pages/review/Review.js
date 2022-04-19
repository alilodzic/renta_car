import React from 'react'
import { Container, Row} from 'react-bootstrap'
import './review.css'
import Pic_1 from '../../assets/images/pic1.png'
import Pic_2 from '../../assets/images/pic2.png'
import Pic_3 from '../../assets/images/pic3.png'
import Pic_4 from '../../assets/images/pic4.png'
import Pic_5 from '../../assets/images/pic5.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Review = () => {
  return (
    <section className="review" id="review">
  <h1 className="heading"> our customers <span>reviews</span> </h1>
          <Container>
        <Row>
          <Swiper  
           spaceBetween={20}
          centeredSlides={true}
            modules={[Pagination,Autoplay]}
            autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         pagination={{
          clickable: true,el:'.swiper-pagination'
        }}
        grabCursor={true}
              loop={true}
               breakpoints={{
          640: {
            slidesPerView: 1,
          },
          968: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper">          
         <SwiperSlide >
           <div className="box">
      <img src={Pic_1} alt="" />
      <h3>john deo</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
    </div>
        </SwiperSlide>
       
          
<SwiperSlide >
    
    <div className="box">
      <img src={Pic_2} alt="" />
      <h3>john deo</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
    </div>
        </SwiperSlide>
        <SwiperSlide >
    <div className="box">
      <img src={Pic_3} alt="" />
      <h3>john deo</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
        </div>
            </SwiperSlide>
            <SwiperSlide >
    <div className="box">
      <img src={Pic_4} alt="" />
      <h3>john deo</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
        </div>
            </SwiperSlide>
                    <SwiperSlide >
    <div className="box">
      <img src={Pic_5} alt="" />
      <h3>john deo</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione vel laboriosam? Est, maxime rem. Itaque.</p>
        </div>
        </SwiperSlide>
            </Swiper>
                  </Row>
  </Container>
</section>

  )
}

export default Review