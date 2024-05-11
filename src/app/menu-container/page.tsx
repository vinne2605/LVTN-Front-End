"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#laptop">Laptop</Nav.Link>
            <Nav.Link href="#main">Main, CPU, VGA</Nav.Link>
            <Nav.Link href="#ram">RAM</Nav.Link>
            <Nav.Link href="#manhinh">Màn hình</Nav.Link>
            <Nav.Link href="#banphim">Bàn phím, Chuột</Nav.Link>
            <Nav.Link href="#tainghe">Tai nghe</Nav.Link>
            <Nav.Link href="#sale">Giảm giá</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
