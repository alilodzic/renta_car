import React from 'react'
import './speciality.css'
import S1 from '../../assets/images/s-img-1.jpg'
import S2 from '../../assets/images/s-img-2.jpg'
import S3 from '../../assets/images/s-img-3.jpg'
import S4 from '../../assets/images/s-img-4.jpg'
import S5 from '../../assets/images/s-img-5.jpg'
import S6 from '../../assets/images/s-img-6.jpg'
import { Container } from 'react-bootstrap'
import S_1 from '../../assets/images/s-1.png'
import S_2 from '../../assets/images/s-2.png'
import S_3 from '../../assets/images/s-3.png'
import S_4 from '../../assets/images/s-4.png'
import S_5 from '../../assets/images/s-5.png'
import S_6 from '../../assets/images/s-6.png'

const Speciality = () => {
  return (
      <section className="speciality mt-5" id="speciality">
          <Container>
  <h1 className="heading"> our <span>speciality</span> </h1>
  <div className="box-container">
    <div className="box">
      <img className="image" src={S1} alt="" />
      <div className="content">
        <img src={S_1} alt="" />
        <h3>tasty burger</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
      </div>
    </div>
    <div className="box">
      <img className="image" src={S2} alt="" />
      <div className="content">
        <img src={S_2} alt="" />
        <h3>tasty pizza</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
      </div>
    </div>
    <div className="box">
      <img className="image" src={S3} alt="" />
      <div className="content">
        <img src={S_3} alt="" />
        <h3>cold ice-cream</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
      </div>
    </div>
    <div className="box">
      <img className="image" src={S4} alt="" />
      <div className="content">
        <img src={S_4} alt="" />
        <h3>cold drinks</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
      </div>
    </div>
    <div className="box">
      <img className="image" src={S5} alt="" />
      <div className="content">
        <img src={S_5} alt="" />
        <h3>tasty sweets</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
      </div>
    </div>
    <div className="box">
      <img className="image" src={S6} alt="" />
      <div className="content">
        <img src={S_6} alt="" />
        <h3>healty breakfast</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
      </div>
    </div>
              </div>
              </Container>
</section>
  )
}

export default Speciality