import React from "react";
import { Button, Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import myproducts from "./data";
import moment from "moment";
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./css/productStyle.css";
import ReactStars from "react-rating-stars-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
const axios = require("axios").default;

function ProductDetail() {
  var Object = localStorage.getItem("object");
  var product = JSON.parse(Object);
  // let b = localStorage.getItem("title");
  // let c = localStorage.getItem("price");
  // let history = useNavigate();
  console.log(product);
  let history = useNavigate();
  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:3001/api/delete/${productId}`);
    history("/");
  };
  function deleteItem(id) {
    var index = myproducts
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    myproducts.splice(index, 1);
    // history('/');
  }

  return (
    <div id="productDetail" className="section-p1 container">
      <div className="row">
        <div id="proImage" className="col-lg-5 col-md-12 col-12">
          <img
            id="mainImg"
            src={require("./css/img/products/" + product.productImage + ".jpg")}
            width="100%"
            alt=""
          ></img>
        </div>

        <div className="col-lg-7">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 mt-3" id="proDetail">
              <h4>Product Id:</h4>
              <h6>{product.idproduct} </h6>
              <h4>Product Name:</h4>
              <h6>{product.productName} </h6>

              <h4>Product Status:</h4>
              <h6>
                {product.productStatus === 1 ? "Published" : "UnPublished"}
              </h6>
              <h4>Product Price:</h4>
              <h6>${product.productPrice}</h6>
            </div>
            <div className="col-lg-6 col-md-6 col-12 mt-3" id="proDetail">
              {/* <h4>Product Description:</h4>
              <h6>{product.description}</h6> */}
              <h4>Product Date:</h4>
              <h6>{moment(product.productDate).format("DD/MM/YYYY")}</h6>
              <h4>Product Quantity:</h4>
              <h6>{product.Quantity}</h6>
              <h4>Product CategoryID:</h4>
              <h6>{product.idCategory}</h6>
            </div>
          </div>
          <div className="col text-center">
            <Button
              onClick={() => {
                deleteProduct(product.idproduct);
              }}
              variant="danger"
            >
              Delete
            </Button>
            <Link to="/update">
              <Button className="ml-3">Edit Product</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // return(
  //     <div>
  //         <div >
  //             <label>
  //                 Id : {a}
  //             </label>
  //         </div>
  //         <div>
  //             <label>
  //                 Title : {b}
  //             </label>
  //         </div>
  //         <div>
  //             <label>
  //                 Page : {c}
  //             </label>
  //         </div>
  //     <Link to="/">
  //         <Button variant ="warning" size="lg">Back</Button>
  //     </Link>
  //     </div>
  // )
}

export default ProductDetail;
