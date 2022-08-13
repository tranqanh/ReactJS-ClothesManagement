import React, { useState, useEffect } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import axios, * as others from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./css/productStyle.css";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "./styles.css";

function Product() {
  let history = useNavigate();
  const [show, setShow] = useState(false);
  const [ide, setIndex] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (ide2) => {
    setShow(true);
    setIndex(ide2);
  };
  // const [productId,setProductId] = useState("");
  // const [productName,setProductName] = useState("");
  // const [productCategory,setProductCategory] = useState("");
  // const [productPrice,setProductPrice] = useState("");
  // const [productQuantity,setQuantity] = useState("");
  // const [productDate,setProductDate] = useState("");
  // const [productStatus,setProductStatus] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      setProductList(response.data);
    });
  });

  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:3001/api/delete/${productId}`);
    handleClose();
    history("/");
  };

  function setDataToStorage(pid) {
    var index = productList
      .map(function (e) {
        return e.idproduct;
      })
      .indexOf(pid);
    var detail = productList[index];
    localStorage.setItem("object", JSON.stringify(detail));
  }

  return (
    <div className="container">
      <h5>Có tổng cộng : {productList.length} sản phẩm</h5>
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>CategoryID</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Status</th>
            <th>View Detail</th>
            <th>Update action</th>
            <th>Delete action</th>
          </tr>
        </thead>
        <tbody>
          {!productList || productList.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No Product yet</b>
              </td>
            </tr>
          ) : (
            productList.map((item) => {
              return (
                <tr>
                  <td>{item.productName}</td>
                  <td>{item.idCategory}</td>
                  <td>${item.productPrice}</td>
                  <td>{item.Quantity}</td>
                  <td>{moment(item.productDate).format("DD/MM/YYYY")}</td>
                  <td>
                    {item.productStatus === 1 ? "Published" : "Unpublish"}
                  </td>
                  <td>
                    <Link to={"/detail"}>
                      <Button onClick={() => setDataToStorage(item.idproduct)}>
                        View
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Link to={"/update"}>
                      <Button
                        onClick={() => setDataToStorage(item.idproduct)}
                        // onClick={() => setDataToStorage(item.id,item.title, item.price,item.quantity,item.date,item.status)}
                        variant="warning"
                      >
                        Update
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      //   onClick={() => {
                      //     deleteProduct(item.idproduct);
                      //   }}
                      onClick={() => handleShow(item.idproduct)}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Cảnh báo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Bạn đang thực hiện chức nẵng xóa sản phẩm có mã là {ide}
                    </Modal.Body>
                    <Modal.Body>
                      Sản phẩm không thể khôi phục khi xóa thành công
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Hủy
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteProduct(ide);
                        }}
                        //   onClick={() => deleteItem(ide)}
                      >
                        Xóa
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
      <Link to="/create">
        <Button className="createButton" variant="success" size="lg">
          Create
        </Button>
      </Link>
    </div>
  );
}

export default Product;
