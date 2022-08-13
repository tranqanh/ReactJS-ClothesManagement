import React from "react";
import "./css/bannerStyle.css";

function Footer(props) {
  return (
    <footer className="section-p1 mt-auto">
      <div className="row container mx-auto pt-5 mt-3">
        <div className="footer-one col-lg-6 col-md-6 col-12">
          <h5 className="pd-2 mb-3">MyShopping</h5>
          <p>The best shop jdafafjfjfa jgndsndjfndsjfndsjnfjfnjn</p>
        </div>

        <div className="footer-one col-lg-6 col-md-6 col-12">
          <div className="col-lg-4 col-md-6 col-12 text-nowrap">
            <p>© Copyright 2022 Nguyen Lam Hung</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
