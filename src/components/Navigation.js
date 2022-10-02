import React,{useState, useEffect} from "react";
import {Nav,Navbar,NavDropdown,Form,Button, Container} from 'react-bootstrap';
import { MdWineBar as Logo, MdOutlineWineBar as HoverLogo, MdArrowUpward as UpArrow} from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Navigation({resetSearch,scrollToTopHandler}) {
const [scrollPosition, setScrollPosition] = useState(0)

const [hover,setHover]=useState(false)

const handleScroll = () => {
  const position = window.pageYOffset;
  setScrollPosition(position);
}

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      }
}, [])
  
function hoverHandler(currentState){
  setHover(currentState)
}

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='sticky-top navbar'>
      <Container>
        <Navbar.Brand href="#/" onMouseEnter={()=>hoverHandler(true)} onMouseLeave={()=>hoverHandler(false)}>Pocket Bartender
        {hover?<HoverLogo/>:<Logo/>}
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {scrollPosition>400&&<Nav className="justify-content-center navbar__up-arrow">
          <button className='btn btn--icon' onClick={scrollToTopHandler}>
            <UpArrow/>
          </button>
          </Nav>}

            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link href="#/search" onClick={resetSearch} className='nav__link'>Drinks</Nav.Link>
                <Nav.Link href="#/favs" className='nav__link'>Favorites</Nav.Link>
                <Nav.Link href="#/about" className='nav__link'>About</Nav.Link>
                <Nav.Link href="https://github.com/boilerplatemax" target="_blank"><FaGithub/></Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/max-shapovalov-2a93191b8/?originalSubdomain=ca" target="_blank"><FaLinkedin/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}
