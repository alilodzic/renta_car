import React from 'react'
import step1 from '../../assets/images//step-1.jpg'
import step2 from '../../assets/images//step-2.jpg'
import step3 from '../../assets/images//step-3.jpg'
import step4 from '../../assets/images//step-4.jpg'
import './timeline.css'
import './work.css'
import { Container} from 'react-bootstrap'

const Timeline = () => {
  return (
    <Container>
  <h1 className="heading mt-4">how it <span>works</span></h1>
<section className="steps mt-4"></section>
    <section className="wrapper ">
  <div className="center-line">
    <div href="#" className="scroll-icon"><i className="fas fa-hand-peace" /></div>
  </div>
  <div className="row row-1">
        <section>
  <i className="icon fas fa-cart-plus" />
  <div className="box">
      <img src={step1} alt="" />
      <h3>choose your favorite food</h3>
     </div>
    </section>
  </div>
  <div className="row row-2">
        <section>
      <i className="icon fas fa-truck" />
      <div className="box">
      <img src={step2} alt="" />
      <h3>free and fast delivery</h3>
        </div>
    </section>
  </div>
  <div className="row row-1">
    <section>
      <i className="icon fas fa-coins" />
     <div className="box" >
      <img src={step3} alt="" />
      <h3>easy payments methods</h3>
        </div>
    </section>
  </div>
  <div className="row row-2">
    <section>
      <i className="icon fas fa-utensils" />
     <div className="box">
      <img src={step4} alt="" />
      <h3>and finally, enjoy your food</h3>
    </div>
     
    </section>
  </div>
  

</section>
</Container>
  )
}

export default Timeline