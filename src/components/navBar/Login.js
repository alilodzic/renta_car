import { Button,Form } from 'react-bootstrap'
import React, { useState } from 'react'

export const Login = ({ log, register, submit,input,setinput }) => {
  
  

  const handlChange = ({target}) => {
    setinput({
      ...input,
      [target.name]:target.value
    })

  }

  return (
    <Form onSubmit={submit}  className={`login-form ${log ? 'active' : null}`} >
    <h3>login now</h3>
      <input type="email" name="email" placeholder="your email" className="box" value={input.email} onChange={handlChange}/>
    <input type="password" name="password" placeholder="your password" className="box" value={input.password} onChange={handlChange} />
    <p>forget your password <Button variant="link" >click here</Button></p>
    <p>don't have an account <Button variant="link" onClick={register} >create now</Button></p>
    <button type="submit" defaultValue="login now" className="bttn" >login now</button>
  </Form>
  )
}
