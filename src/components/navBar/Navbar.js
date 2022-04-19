import React,{useState} from 'react'
import {Nav, Navbar ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from './Card'
import { Login } from './Login'
import './nav.css'
import Register from './Register'
import Search from './Search'



const NavBar = () => {

  const [toggle, settoggle] = useState({ log: false, card: false, search: false, nav: false });
  const [show, setShow] = useState(false);
  const [input, setinput] = useState({ email: '', password: '' });

    
      window.addEventListener('scroll', () => {
     settoggle({ log: false, card: false, search: false, nav: false }) 
      });
  


     
    const handleClose = () => {setShow(false);}
    const handleShow = () => { setShow(true); settoggle({ log: false }) }
    const logsub = (e) => { 
    e.preventDefault();
      settoggle({ log: false });
      setinput({ email: '', password: '' })
    console.log(input)

  }

  return (
   <header className="header">
  <Navbar.Brand href="#" className="logo"> <i className="fas fa-utensils" /> Food </Navbar.Brand>
  <Nav  className={`navbar ${toggle.nav ? 'active' : null}`}>
    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
    <Nav.Link as={Link} to={'specialty'}>specialty</Nav.Link>
    <Nav.Link as={Link} to={'categories'}>categories</Nav.Link>
    <Nav.Link as={Link} to={'gallery'}>Gallery</Nav.Link>
    <Nav.Link  as={Link} to={'about'}>about</Nav.Link>
    <Nav.Link as={Link} to={'contact'}>contact</Nav.Link>
  </Nav>
  <div className="icons">
    <div className="fas fa-bars" id="menu-btn" onClick={() => settoggle(prev => ({nav : !prev.nav}))} />
    <div className="fas fa-search" id="search-btn" onClick={() => settoggle(prev => ({search : !prev.search}))}/>
              <div className="fas fa-shopping-cart" id="cart-btn" onClick={() => settoggle(prev => ({card : !prev.card}))}  />
    <div className="fas fa-user" id="login-btn" onClick={() => settoggle(prev => ({log : !prev.log}))}  />
  </div>
 <Search search={toggle.search} />
 <Card card={toggle.card} />
  <Login log={toggle.log} register={handleShow} submit={logsub} input={input} setinput={setinput} />
      <Register show={show} handleClose={handleClose} />
 
</header>

  )
}

export default NavBar