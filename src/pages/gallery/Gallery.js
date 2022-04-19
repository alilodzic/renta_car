import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'
import './gallery.css'
import g_1 from '../../assets/images/g-1.jpg'
import g_2 from '../../assets/images/g-2.jpg'
import g_3 from '../../assets/images/g-3.jpg'
import g_4 from '../../assets/images/g-4.jpg'
import g_5 from '../../assets/images/g-5.jpg'
import g_6 from '../../assets/images/g-6.jpg'
import g_7 from '../../assets/images/g-7.jpg'
import g_8 from '../../assets/images/g-8.jpg'
import g_9 from '../../assets/images/g-9.jpg'


const Gallery = () => {
  return (
    <section className="gallery mt-5" id="gallery">
  <h1 className="heading"> our food <span> gallery </span> </h1>
    <Container>
        <Row>
    <Col md={4} >      
    <div className="box">
      <img src={g_1} alt="" />
      <div className="content">
        <h3>tasty food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        <button href="#" className="bttn">ordern now</button>
      </div>
    </div></Col> <Col md={4} >
    <div className="box">
      <img src={g_2} alt="" />
      <div className="content">
        <h3>tasty food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        <button href="#" className="bttn">ordern now</button>
      </div>
    </div></Col><Col md={4} >
    <div className="box">
      <img src={g_3} alt="" />
      <div className="content">
        <h3>tasty food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        <button href="#" className="bttn">ordern now</button>
      </div>
    </div></Col><Col md={4} >
    <div className="box">
      <img src={g_4} alt="" />
      <div className="content">
        <h3>tasty food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        <button href="#" className="bttn">ordern now</button>
      </div>
    </div></Col><Col md={4} >
    <div className="box">
      <img src={g_5} alt="" />
      <div className="content">
        <h3>tasty food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        <button href="#" className="bttn">ordern now</button>
      </div>
    </div></Col><Col md={4} >
    <div className="box">
      <img src={g_6} alt="" />
      <div className="content">
        <h3>tasty food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        <button href="#" className="bttn">ordern now</button>
      </div>
    </div></Col><Col md={4} >
    <div className="box">
      <img src={g_7} alt="" />
      <div className="content">
        <h3>tasty food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        <button href="#" className="bttn">ordern now</button>
      </div>
    </div></Col><Col md={4} >
    <div className="box">
      <img src={g_8} alt="" />
      <div className="content">
        <h3>tasty food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        <button href="#" className="bttn">ordern now</button>
      </div>
    </div></Col><Col md={4} >
    <div className="box">
      <img src={g_9} alt="" />
      <div className="content">
        <h3>tasty food</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
        <button href="#" className="bttn">ordern now</button>
      </div>
      </div></Col>
    </Row>
  </Container>
</section>

  )
}

export default Gallery