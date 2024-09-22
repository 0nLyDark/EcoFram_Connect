import React from "react";
import { Nav, Tab, Container, Row, Col } from "react-bootstrap";
import InfoUser from "./infoUser";
import InfoShop from "./infoShop";
import { Link } from "react-router-dom";

function ProfileUser() {
  return (
    <Container style={{ marginTop: "160px" }}>
      <h2 className="text-center" style={{ color:"rgb(75, 230, 75)" }} >Quản lý tài khoản</h2>
      <br />
      <Tab.Container defaultActiveKey="info">
        <Row>
          <Col
            sm={3}
            style={{
              backgroundColor: "rgb(217, 255, 167)",
              borderRadius: "25px",
              minHeight: "400px",
            }}
            className="py-4"
          >
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="info" className="fs-5 px-4" >Thông tin cá nhân</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="shop" className="fs-5 px-4 " >Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Link to={'/'} className="fs-5 px-4 " >Quản lý nông trại</Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className="px-4">
            <Tab.Content>
              <Tab.Pane eventKey="info">
                <h3>Thông tin cá nhân</h3>
                <InfoUser />
              </Tab.Pane>
              <Tab.Pane eventKey="shop">
                {/* <h3>Shop</h3> */}
                <InfoShop />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default ProfileUser;
