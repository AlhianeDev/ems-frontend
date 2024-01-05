import { Container, Nav, NavLink, Navbar } from "react-bootstrap";

const Header = () => {

  return (

    <header>

        <Navbar bg="dark" data-bs-theme="dark">

            <Container>

            <Navbar.Brand className="me-auto" to="/" as={ NavLink }>
                
                Employee Managment System
                
            </Navbar.Brand>

            <Nav>

                <Nav.Link to="/" as={ NavLink }>Home</Nav.Link>

                <Nav.Link href="/add" as={ NavLink }>Add</Nav.Link>

            </Nav>

            </Container>

      </Navbar>

    </header>

  );

}

export default Header
