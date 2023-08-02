import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Cart from './Cart';
import { useState } from 'react';


function Navbor() {

  const [Login, setLogin] = useState(true)


  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="http://localhost:5173/home" id='ss'>Sigma Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link className='nav-link' id='home' to='/home'>Home</Link>
            <Link className='nav-link' id='product' to='/product' >Product</Link>
          </Nav>
          <Nav>
            {
              Login
                ?
                (<>
                  <div className=' mt-2'>
                    <FaUserCircle size={25} />
                    <span className='me-2 ms-2' id='username'>
                      Guest
                    </span>
                    <Link className='ms-4 btn btn-dark' to='/login'>Login</Link>
                  </div>
                </>)
                :
                (<>
                  <div className=' mt-2'>
                    <FaUserCircle size={25} />
                    <span className='me-2 ms-2' id='username'>
                      Admin
                    </span>
                    <Cart className='ms-2' />
                    <Link className='ms-4 btn btn-dark' to='/logout'>Logout</Link>
                  </div>
                </>)
            }
            {/* <div className=' mt-2'>
              <FaUserCircle size={25} />
              <span className='me-2 ms-2' id='username'>
                Guest
              </span>
              <Cart className='ms-2' />
              <Link className='ms-4 btn btn-dark' to='/logout'>Logout</Link>
              <Link className='ms-4 btn btn-dark' to='/login'>Login</Link>
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbor;