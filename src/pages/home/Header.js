import React from 'react'
import Img from '../../assets/images/home-img.png'
import { Container, Row ,Col} from 'react-bootstrap'


const Header = () => {
  return (
      <section className="home" id="home">
          <Container >
              <Row>
                
                  <Col md={6}>
  <div className="content">
    <h3>food made with love</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>
    <button href="#" className="bttn">order now</button>
                      </div>
                  </Col>
                    <Col md={6}>
  <div className="image">
    <img src={Img} alt="" />
                      </div>
                      </Col>
         </Row>
              </Container>
</section>
  )
}

export default Header