import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./styles.css";
class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar sticky="top" id='header'>
        <div className="container-fluid">
            <NavbarBrand href="/">MyShopping</NavbarBrand>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="Navbar">
                <ul className="navbar-nav mr-auto" id='itemNav'>
                    {/* <li class="nav-item"><a class="nav-link active" href="/">Home</a></li> */}
                    <li class="nav-item">
                      <NavLink className='nav-link' to={"/"}>
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className='nav-link' to={"/create"}>
                        Create
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className='nav-link' to={"/create"}>
                        Log
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink className='nav-link' to={"/c"}>
                        <span class="fa fa-shopping-bag"></span>
                      </NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </Navbar>
    </React.Fragment>
    );
  }
}

export default Header;