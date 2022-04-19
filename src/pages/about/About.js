import React from 'react'
import about from '../../assets/images/about-img.png'
import './about.css'
import { Container} from 'react-bootstrap'

const About = () => {
  return (
      <section className="about" id="about">
          <Container>
  <h3 className="sub-heading"> about us </h3>
  <h1 className="heading"> why choose us? </h1>
  <div className="row">
    <div className="image">
      <img src={about} alt="" />
    </div>
    <div className="content">
      <h3>best food in our city</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-shipping-fast" />
          <span>free delivery</span>
        </div>
        <div className="icons">
          <i className="fas fa-dollar-sign" />
          <span>easy payments</span>
        </div>
        <div className="icons">
          <i className="fas fa-headset" />
          <span>24/7 service</span>
        </div>
      </div>
    </div>
              </div>
              </Container>
</section>

  )
}

export default About