import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Store } from '../../store/store';
const Header = (props) => {
  const myName = 'Soham Satpati';
  const history = useHistory();
  const logout = () => {
    window.localStorage.clear();
    history.push('/login');
  };
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand as={Link} to='/'>
          Navbar scroll
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='mr-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={`/about/${myName}`}>
              About Us
            </Nav.Link>

            <Nav.Link as={Link} to='/contact'>
              Contact Us
            </Nav.Link>

            <Nav.Link as={Link} to='/ProductCategory'>
              ProductCategory
            </Nav.Link>

            <Nav.Link as={Link} to='/ProductCategoryNew'>
              ProductCategory(New)
            </Nav.Link>

            <Nav.Link as={Link} to='/productCategoryRedux'>
              ProductCategory(Redux)
            </Nav.Link>

            <Nav.Link as={Link} to='/registration'>
              Registration
            </Nav.Link>
            <Nav.Link as={Link} to='/login'>
              Login
            </Nav.Link>

            <button onClick={logout}>Logout</button>
            <NavDropdown title='Link' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
