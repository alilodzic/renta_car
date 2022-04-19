import React, { useState } from 'react'
import {Modal, Button,Form } from 'react-bootstrap'
const Register = ({ show, handleClose }) => {
  
  const [input, setinput] = useState({ email: '', name:'',phone:'', password: '' });

  const handlChange = ({ target }) => {
    setinput({
      ...input,
      [target.name]: target.value
    })
  }
  const submit = (e) => { 
    e.preventDefault();
      
      setinput({ email: '', password: '' })
    console.log(input)

  }
  return (
      <Modal
          show={show}
          onHide={handleClose}
           size="md"
      aria-labelledby="contained-modal-title-vcenter"
      className="p-5"
       >
        <Modal.Header closeButton>
          <Modal.Title  className='head-mod'>Register</Modal.Title>
        </Modal.Header>
      <Modal.Body className="p-5">
        <Form onSubmit={submit}  className="login-form" >
      <input type="email" name="email" placeholder="your email" className="box" value={input.email} onChange={handlChange}/>
      <input type="text" name="name" placeholder="your name" className="box" value={input.name} onChange={handlChange}/>
      <input type="number" name="phone" placeholder="your phone" className="box" value={input.phone} onChange={handlChange}/>
      <input type="password" name="password" placeholder="your password" className="box" value={input.password} onChange={handlChange} />
      <input type="password" name="password-confirme" placeholder="your confirme password" className="box" value={input.password} onChange={handlChange} />

  </Form>

        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between p-4"> 
          <Button variant="outline-secondary" size="lg" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" className="bttn" size="lg" onClick={handleClose} disabled={false} >
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default Register