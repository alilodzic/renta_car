import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'
import './popular.css'

import P_1 from '../../assets/images/p-1.jpg'
import P_2 from '../../assets/images/p-2.jpg'
import P_3 from '../../assets/images/p-3.jpg'
import P_4 from '../../assets/images/p-4.jpg'
import P_5 from '../../assets/images/p-5.jpg'
import P_6 from '../../assets/images/p-6.jpg'

const Popular = () => {
  return (
    <section className="popular" id="popular">
  <h1 className="heading"> most <span>popular</span> foods </h1>
          <Container>
              <Row xl={3}>
    <div className="box">
      <span className="price"> $5 - $20 </span>
      <img src={P_1} alt="" />
      <h3>tasty burger</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <button href="#" className="bttn">order now</button>
    </div>
    <div className="box">
      <span className="price"> $5 - $20 </span>
      <img src={P_2}alt="" />
      <h3>tasty cakes</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <button href="#" className="bttn">order now</button>
    </div>
    <div className="box">
      <span className="price"> $5 - $20 </span>
      <img src={P_3} alt="" />
      <h3>tasty sweets</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <button href="#" className="bttn">order now</button>
    </div>
    <div className="box">
      <span className="price"> $5 - $20 </span>
      <img src={P_4} alt="" />
      <h3>tasty cupcakes</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <button href="#" className="bttn">order now</button>
    </div>
    <div className="box">
      <span className="price"> $5 - $20 </span>
      <img src={P_5} alt="" />
      <h3>cold drinks</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <button href="#" className="bttn">order now</button>
    </div>
    <div className="box">
      <span className="price"> $5 - $20 </span>
      <img src={P_6} alt="" />
      <h3>cold ice-cream</h3>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
      <button href="#" className="bttn">order now</button>
                  </div>
                  </Row>
  </Container>
</section>
  )
}

export default Popular