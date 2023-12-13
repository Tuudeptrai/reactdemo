import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink,useNavigate} from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const handleLogin=()=>{
    navigate('/login')
 }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home">Tuu dep trai</Navbar.Brand> */}
        <NavLink className="navbar-brand " to="/">Tuu web</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink className="nav-link " to="/">Home</NavLink>
          <NavLink  className="nav-link" to="/users">Users</NavLink>
          <NavLink  className="nav-link" to="/admins">Admin</NavLink>
          </Nav>
          <Nav>
            <button className='btn-login' onClick={handleLogin}>Log in</button>
            <button className='btn-singup'>Sign up</button>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavDropdown.Item >Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;