import React from 'react'
import './work.css'

import step1 from '../../assets/images//step-1.jpg'
import step2 from '../../assets/images//step-2.jpg'
import step3 from '../../assets/images//step-3.jpg'
import step4 from '../../assets/images//step-4.jpg'
import { Container,Row,Col } from 'react-bootstrap'

const Work = () => {
  return (
    <Container>
  <h1 className="heading mt-4">how it <span>works</span></h1>
<section className="steps mt-4">
    <Row>
        <Col sm={6} md={3}>
    <div className="box">
      <img src={step1} alt="" />
      <h3>choose your favorite food</h3>
     </div>
        </Col>
        <Col  sm={6} md={3}>
    <div className="box">
      <img src={step2} alt="" />
      <h3>free and fast delivery</h3>
        </div>
    </Col>
    <Col sm={6} md={3}>
    <div className="box" >
      <img src={step3} alt="" />
      <h3>easy payments methods</h3>
        </div>
        </Col>
        <Col sm={6} md={3}>
    <div className="box">
      <img src={step4} alt="" />
      <h3>and finally, enjoy your food</h3>
    </div>
    </Col>
    </Row>
</section>
</Container>
  )
}

export default Work