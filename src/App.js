import { useState } from 'react';
import './App.css';
import {Routes,Route, Link, Outlet} from "react-router-dom";
import Footer from './components/footer/Footer';
import Home from './pages/home'
import Work from './pages/howork/Work';
import Popular from './pages/popular/Popular';
import Review from './pages/review/Review';
import Speciality from './pages/speciality/Speciality';
import NavBar from './components/navBar/Navbar';
import Gallery from './pages/gallery/Gallery';
import Timeline from './pages/howork/Timeline';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
function App() {

  const [scrollTop, setscrollTop] = useState(false);

  window.addEventListener('scroll', () => {
     if (window.scrollY > 600) {
       setscrollTop(true);
     } else {
        setscrollTop(false);
     }
    
  });
  console.log('rend')
  return (
    < >
      <NavBar />
       <Routes>
          <Route path="/"   element={<Home />} />
          <Route path="specialty" element={<Speciality />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        <Route path="categories" element={
          <div style={{ margin: '200px', textAlign: 'center' }}>
          <h1 >categories</h1>
          <Link to={'work'}>work</Link>{' '}
            <Link to={'Review'}>Review</Link>
             <Outlet />
          </div>
                   

        } >
             <Route  index element={<Popular />} />

           <Route  path="work"   element={<Work />} />
          <Route path="Review"   element={<Review />} />
        </Route>

     
      </Routes>
      <Footer />
  
       <button className={`fas fa-angle-up ${scrollTop ? 'active' : null}` } id="scroll-top" onClick={() => window.scrollTo(0,0)}></button>
    </>
  );
}

export default App;
