import React from 'react'
import Form from '../../components/form/Form'
import {Container, Row,Col }  from "react-bootstrap";
import './contact.css'
function Contact() {

    return (
        <>
        <Container>

                <Row className="cntct">
                <Col md="6">

                            <h2>Where Are We ?</h2>
                            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                            </p>
                            
                            <div><span><i className="fas fa-map-marked-alt"></i></span> UV 07 Lotissement AADL N°378 Nouvelle Ville 25016.</div>
                            <div className="my-3"><span><i className="fas fa-phone-alt"></i></span> (+213) 658 41 58 95</div>
                            <div><span><i className="fas fa-envelope"></i></span> moohmeed881@gmail.com</div>
                            
                        
                </Col>
                <Col md="6">
                              <Form />
                </Col>



                

    </Row>
              
        </Container>
          {/* --------map--------- */}
          <div className="mt-5 border-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.1840887495514!2d6.585336449930949!3d36.25930940556226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f17aa91a03053d%3A0xc26b09546f6afedc!2sECO%20COM%20CONSULTING!5e0!3m2!1sen!2sdz!4v1621159056557!5m2!1sen!2sdz" width="100%" height="270" allowFullScreen loading="lazy"></iframe>
         </div>
         </>
    )
}
export default Contact
