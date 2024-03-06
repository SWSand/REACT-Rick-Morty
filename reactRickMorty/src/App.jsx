import './App.css';
import { Outlet, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

export default function App() {
  return (
    <>
        <div className='nav'>
            <Navbar>
            <Navbar.Brand>
                    <Link to="/">Rick and Morty</Link>
                  </Navbar.Brand>
              <Container fluid>
                <Row>
                  <Col>
                    <Link to="about/">About</Link>
                  </Col>
                  
                  <Col>
                    <Link to="contacts/">Contacts</Link>
                  </Col>
                </Row>
              </Container>
            </Navbar>
        </div>

        <Outlet />

    </>
    )
  
}
