import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Users</Nav.Link>
        <Nav.Link as={Link} to='/adduser'>Add user</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar