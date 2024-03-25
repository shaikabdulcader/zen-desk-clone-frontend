import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  let navigate = useNavigate()
  return <>
    <Navbar expand="lg" className=" bg-dark">
      <Container>
        <Navbar.Brand href="/" className='text-warning'><h3>Zen Desk</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate("/")}className='text-white'>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate("/create")}className='text-white'>Create Request</Nav.Link>
            <Nav.Link onClick={()=>navigate("/status")}className='text-white'>Ticket Status</Nav.Link>
            <Nav.Link onClick={()=>navigate("/login")}className='text-primary'>Admin Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default Header