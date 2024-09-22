import { Col, Row } from "react-bootstrap";

function InfoShop() {
  return (
    <>
      <h3 className="text-center" style={{ color: "rgb(157, 230, 75)" }}>
        Bạn chưa có gian hàng nông trại{" "}
      </h3>
      <h4 className="text-center">Hãy đăng ký nông trại của bạn</h4>
      <div className="row">
        <div className="col-md-6">
          <label>Tên nông trại của bạn:</label>
          <input type="text" className="form-control mt-2" />
        </div>
        <div className="col-md-6">
          <label>Loại nông sản của nông trại bạn:</label>
          <input type="text" className="form-control mt-2" />
        </div>
      </div>
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
      <div className="justify-content-center my-4">
        <button className="form-control" style={{ maxWidth:"200px",backgroundColor:"rgb(157, 230, 75)",color:"white" }} >Đăng ký nông trại</button>
      </div>
    </>
  );
}

export default InfoShop;
