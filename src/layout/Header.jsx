import React, { Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
        <Navbar expand="md" bg='primary' data-bs-theme="dark" className='shadow'>
          <Container>
            <Navbar.Brand>
              <NavLink
                  to={`counter`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none text-white')}>
                React Projects
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <NavLink
                  to={`counter`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none')}>
                  Counter
                </NavLink>
                
                <NavLink 
                  to={`todo`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none')}>
                  Todo
                </NavLink>
                              
                <NavLink 
                  to={`api`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none')}>
                  MealsApi
                </NavLink>
                               
                <NavLink 
                  to={`toggle`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none')}>
                  ToggleBG
                </NavLink>  

                <NavLink 
                  to={`testimonials`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none')}>
                  Testimonials
                </NavLink>   

                <NavLink 
                  to={`accordion`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none')}>
                  Accordion
                </NavLink>

                <NavLink 
                  to={`validation`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none')}>
                  Form Validation
                </NavLink>   
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Fragment>
  )
}

export default Header;