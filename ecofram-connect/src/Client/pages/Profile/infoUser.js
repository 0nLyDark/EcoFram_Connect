import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function InfoUser() {
  return (
      <div style={{ maxWidth: "650px" }}>
        <Row>
          <Col sm={6} className="form-item  py-2">
            <label htmlFor="lastName" form-label>
              Họ:{" "}
            </label>
            <input name="lastName" className="form-control mt-2" />
          </Col>
          <Col sm={6} className="form-item  py-2">
            <label htmlFor="firstName" form-label>
              Tên:{" "}
            </label>
            <input name="firstName" className="form-control mt-2" />
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="form-item  py-2">
            <label htmlFor="email" form-label>
              Email:{" "}
            </label>
            <input name="email" className="form-control mt-2" disabled />
          </Col>
          <Col sm={6} className="form-item  py-2">
            <label htmlFor="mobileNumber" form-label>
              Số điện thoại:{" "}
            </label>
            <input
              name="mobileNumber"
              maxLength={10}
              className="form-control mt-2"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="py-4">
            <label for="city">Tỉnh / thành:</label>
            <select id="city" className="form-control">
              <option value={0}>Chọn tỉnh / thành</option>
              <option value={1}>Thành phố Hồ Chí Minh</option>
            </select>
          </Col>
          <Col md={4} className="py-4">
            <label for="district">Quận / huyện:</label>
            <select id="district" className="form-control">
              <option value={0}>Chọn quận / huyện</option>
            </select>
          </Col>
          <Col md={4} className="py-4">
            <label for="ward">Phường / xã:</label>
            <select id="ward" className="form-control">
              <option value="">Chọn phường / xã</option>
            </select>
          </Col>
        </Row>
        <label for="buildingName ">Địa chỉ:</label>
        <input
          type="text"
          name="buildingName "
          id="buildingName "
          className="form-control"
          placeholder="Nhập địa chỉ"
        />
        <div className="py-4">
          <button
            className="btn form-control "
            style={{
              maxWidth: "150px",
              backgroundColor: "rgb(157, 230, 75)",
              color: "white",
            }}
          >
            Cập nhật
          </button>
        </div>
      </div>
  );
}

export default InfoUser;
