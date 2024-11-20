import React from 'react';
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";

function Navbar({count}) {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Form">Form</Link>
        </li>
       
       
      </ul>
      <form className="d-flex" role="search">
      {/* <li className="nav-item"> */}
          <Link className="nav-link  "to='/Cart'><IoCart fontSize={24}/></Link>
          <sup>{count}</sup>
        {/* </li> */}
       
      
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
