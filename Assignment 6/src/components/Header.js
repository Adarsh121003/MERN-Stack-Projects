import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Logo from '../img/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      {/* =========First part of hrader */}
      <div className='row bg-primary'>
        <div className='col-md-3 col-12'>
          <img src={Logo} alt="Logo" className='logo-image mx-5' />
        </div>
        <div className='col-md-6 col-12'>
          <form className="d-flex" role="search">
            <input className="form-control me-lg-1 mx-lg-1 mx-md-5 mt-2 w-75" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success btn-light mt-2" type="submit">Search</button>
          </form>
        </div>
        <div className='col-md-3 col-12 d-flex justify-content-end'>
          <div>
            <button className="btn btn-outline-success btn-light mt-2" type="submit">Login</button>
          </div>
          <div className='px-lg-3 ml-lg-0 ps-md-5 mt-2'>
            <button className='btn btn-outline-none'>
              <FontAwesomeIcon className="cart fs-3 icon-style" icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
      {/*==============Second Part of the Header =========================== */}
      <div className='row'>
        <div className='col-12 d-flex justify-content-center mt-2'>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      All Product
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Women
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          All
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Dresses
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Pants
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Skirts
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Men
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          All
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Hoodies
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Pants
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Shirts
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Kids
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
