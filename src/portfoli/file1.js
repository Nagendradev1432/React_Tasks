import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Fort() {
  return (
<Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "black",color:"white" }}>


      <Container>
        <Navbar.Brand href="#home"><h1 style={{color:"orange"}}>portfolio</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#deets"><h3 style={{color:"orange"}}>contact</h3></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <h3 style={{color:"orange"}}>About</h3>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <h3 style={{color:"orange"}}>Project</h3>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <h3 style={{color:"orange"}}>skills</h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Fort;
