import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink,useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const account = useSelector(state => state.user.account)
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  console.log("account", account, "isAuthenticated", isAuthenticated);
  const navigate = useNavigate();
  const handleLogin=()=>{
    navigate('/login')
 }
  const handleSignup=()=>{
    navigate('/signup')
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
            {isAuthenticated===false?
            <>
              <button className='btn-login' onClick={handleLogin}>Log in</button>
              <button className='btn-singup' onClick={handleSignup}>Sign up</button>
            </>
            :<NavDropdown title="Setting" id="basic-nav-dropdown">
                    <NavDropdown.Item >logout</NavDropdown.Item>
                    <NavDropdown.Item >Profile</NavDropdown.Item>
             </NavDropdown>
            }
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;