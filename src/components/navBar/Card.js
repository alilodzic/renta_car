import React from 'react'
import { Image } from 'react-bootstrap'
import cart_1 from '../../assets/images/s-img-1.jpg'
import cart_2 from '../../assets/images/s-img-2.jpg'
import cart_3 from '../../assets/images/g-3.jpg'

const Card = ({card}) => {
  return (
    <div className={`shopping-cart ${card ? 'active' : null}`}>
    <div className="box">
      <i className="fas fa-trash" />
      <Image roundedCircle  src={cart_1} alt="" />
      <div className="content">
        <h3>Hamburger</h3>
        <span className="price">$4.99/-</span>
        <span className="quantity">qty : 1</span>
      </div>
    </div>
    <div className="box">
      <i className="fas fa-trash" />
      <Image src={cart_2} roundedCircle alt="" />
      <div className="content">
        <h3>Pizza</h3>
        <span className="price">$4.99/-</span>
        <span className="quantity">qty : 1</span>
      </div>
    </div>
    <div className="box">
      <i className="fas fa-trash" />
      <Image src={cart_3} roundedCircle alt="" />
      <div className="content">
        <h3>Tacos</h3>
        <span className="price">$4.99/-</span>
        <span className="quantity">qty : 1</span>
      </div>
    </div>
    <div className="total"> total : $19.69/- </div>
    <button href="#" className="bttn">checkout</button>
  </div>
  )
}

export default Card