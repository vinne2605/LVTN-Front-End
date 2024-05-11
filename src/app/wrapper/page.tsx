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
    </>
  );
}

export default PreHeader;
