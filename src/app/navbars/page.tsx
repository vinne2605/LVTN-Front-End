"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

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
      <Navbar>
        <Container>
          <Nav className="mr-auto">
            <Nav.Link href="#taikhoan">
              <img
                alt=""
                src="logo.jpg"
                width="274"
                height="42"
                className="d-inline-block align-top"
              />{" "}
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            {" "}
            <Dropdown className="me-2">
              {" "}
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sản phẩm
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#timnsx">Nhà sản xuất</Dropdown.Item>
                <Dropdown.Item href="#timncc">Nhà cung cấp</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Bạn cần tìm gì?"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Tìm</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#laptop">Laptop</Nav.Link>
            <Nav.Link href="#main">Main, CPU, VGA</Nav.Link>
            <Nav.Link href="#ram">RAM</Nav.Link>
            <Nav.Link href="#manhinh">Màn hình</Nav.Link>
            <Nav.Link href="#banphim">Bàn phím, Chuột</Nav.Link>
            <Nav.Link href="#tainghe">Tai nghe</Nav.Link>
            <Nav.Link href="#sale" style={{ backgroundColor: "red" }}>
              Giảm giá
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="light" data-bs-theme="secondary">
        <Container>
          <Nav.Link href="#taikhoan">
            <img
              alt=""
              src="wallet-solid.svg"
              width="24"
              height="24"
              className="d-inline-block align-top"
            />{" "}
            Hướng dẫn thanh toán
          </Nav.Link>
          <Nav.Link href="#taikhoan">
            <img
              alt=""
              src="piggy-bank-solid.svg"
              width="24"
              height="24"
              className="d-inline-block align-top"
            />{" "}
            Hướng dẫn trả góp
          </Nav.Link>
          <Nav.Link href="#taikhoan">
            <img
              alt=""
              src="toolbox-solid.svg"
              width="24"
              height="24"
              className="d-inline-block align-top"
            />{" "}
            Tra cứu bảo hành
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default PreHeader;
