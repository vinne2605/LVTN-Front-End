"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function PreHeader() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="mr-auto">
            <Nav.Link href="#taikhoan">
              <img
                alt=""
                src="user-solid.svg"
                width="24"
                height="24"
                className="d-inline-block align-top"
              />{" "}
              Tài khoản của tôi
            </Nav.Link>
            <Nav.Link href="#donhang">
              <img
                alt=""
                src="location-dot-solid.svg"
                width="24"
                height="24"
                className="d-inline-block align-top"
              />{" "}
              Theo dõi đơn hàng
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#giohang">
              <img
                alt=""
                src="cart-shopping-solid.svg"
                width="24"
                height="24"
                className="d-inline-block align-top"
              />{" "}
              Giỏ hàng
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default PreHeader;
