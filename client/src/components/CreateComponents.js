import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
const axios = require("axios").default;
function Create() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setQuantity] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDate, setProductDate] = useState(new Date());
  const [productStatus, setProductStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [messageDb, setMessageDb] = useState("");
  let history = useNavigate();
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: 1, text: "Shirt 👕" },
    { value: 2, text: "Pant 👖" },
    { value: 3, text: "Hat 👒" },
  ];
  const options1 = [{ value: false, text: "False 🚫" }];

  const [selected, setSelected] = useState(options[0].value);
  const [selected1, setSelected1] = useState(options1[0].value);
  const onChangeName = (event) => {
    const value = event.target.value;
    setProductName(value);
  };

  const onChangePrice = (event) => {
    const value = event.target.value;
    console.log(value === Number);
    setProductPrice(value);
  };
  const onChangeCategory = (event) => {
    const value = event.target.value;

    console.log(event.target.value);
    setSelected(value);
    setProductCategory(value);
  };
  const onChangeStatus = (event) => {
    const value = event.target.value;

    console.log(event.target.value);
    setSelected1(value);
    setProductStatus(value);
  };
  const onChangeQuantity = (event) => {
    const value = event.target.value;
    setQuantity(value);
  };
  const onChangeImg = (event) => {
    var files = event.target.files;
    var filesArray = [].slice.call(files);
    filesArray.forEach((event) => {
      console.log(event.name.split('.')[0]);
      const value = event.name.split('.')[0];
      setProductImage(value);
    });

  };
  const validateAll = () => {
    const msg = {};
    if (isEmpty(productName)) {
      msg.productName = "Please input Name of product ";
    }
    if (messageDb != "") {
      msg.productName = messageDb;
    }
    if (isEmpty(productPrice)) {
      msg.productPrice = "Please input Price";
    }
    if (isEmpty(productQuantity)) {
      msg.productQuantity = "Please input Quantity ";
    }
    if (isEmpty(productImage)) {
      msg.productImage = "Please input Image ";
    }
    if (isEmpty(productCategory)) {
      msg.productCategory = "Please select Category ";
    }
    if (productPrice < 0) {
      msg.productPrice = "Please input price > 0";
    }
    if (productQuantity < 0) {
      msg.productQuantity = "Please input quantity > 0";
    }
    setMessage(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const submitUpdate = () => {
    const day = moment(productDate).format("YYYY-MM-DD");
    console.log(day);
    console.log(productCategory);
    const isValid = validateAll();
    if (!isValid) return;
    axios
      .post("http://localhost:3001/create", {
        pName: productName,
        pImage: productImage,
        pPrice: productPrice,
        pQuantity: productQuantity,
        pDate: day,
        pCategory: productCategory,
        pStatus: productStatus,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.includes("Duplicate")) {
          setMessageDb("Duplicate Product Name");
        }
        if (response.data == "") {
          setSubmitted(true);
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  };
  const newTutorial = () => {
    setSubmitted(false);
  };

  return (
    <div>
      <Header />
      <br></br>
      <div className="container">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={() => history("/")}>
              Back
            </button>
            <button className="btn btn-success" onClick={newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h4 className="mt-4 text-primary font-weight-bold">
                {" "}
                🎉️🎉 Create Product️ 🎉️🎉
              </h4>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Product Name: </label>
                    <input
                      type={"text"}
                      placeholder="Product Name 										🖋"
                      name="productName"
                      className="form-control"
                      onChange={onChangeName}
                    />
                  </div>
                  <p className="text-danger font-italic">
                    {message.productName}
                  </p>
                  <div className="form-group">
                    <label> Product Price : </label>
                    <input
                      type="number"
                      placeholder="Product Price 										🖋"
                      name="productPrice"
                      className="form-control"
                      onChange={onChangePrice}
                    />
                  </div>
                  <p className="text-danger font-italic">
                    {message.productPrice}
                  </p>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Date 📅 </label>
                      <DatePicker
                        selected={productDate}
                        onChange={(date) => setProductDate(date)}
                        maxDate={new Date("07-21-2022")}
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <label> Quantity : </label>
                      <input
                        type="number"
                        placeholder="Quantity 			  🖋"
                        name="quantity"
                        className="form-control"
                        onChange={onChangeQuantity}
                      />
                    </div>
                  </div>
                  <p className="text-danger font-italic">
                    {message.productQuantity}
                  </p>
                  <div className="form-group">
                    <label> Product Image : </label>
                    <input
                      type={"file"}
                      placeholder="Product Image 										🖋"
                      name="productImage"
                      className="form-control"
                      onChange={onChangeImg}
                    />
                  </div>
                  <p className="text-danger font-italic 2">
                    {message.productImage}
                  </p>

                  <div className="form-group">
                    <label> Product Category : </label>
                    {/* <input
                      placeholder="Product Category"
                      name="productCategory"
                      className="form-control"
					  onChange={onChangeCategory}
                    /> */}
                    <select value={selected} onChange={onChangeCategory}>
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-danger font-italic">
                    {message.productCategory}
                  </p>
                  <div className="form-group">
                    <label> Product Status : </label>
                    <select value={selected1} onChange={onChangeStatus}>
                      {options1.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                    {/* <input 
										placeholder="Product Status"
										name="productStatus"
										className="form-control"
										value={false}
										// onChange={(e) => {
										// 	setProductStatus(e.target.value);
										// }}
									/> */}
                  </div>

                  <button
                    className="btn btn-success"
                    type="button"
                    onClick={submitUpdate}
                  >
                    Save
                  </button>
                  <button className="btn btn-danger">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Create;

//onClick={this.saveOrUpdateEmployee}
// onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}
