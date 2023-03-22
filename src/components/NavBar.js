import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";



function NavBar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={'/'}>
          TECSTORE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={'/categoria/laptops'}>
                Laptops
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/categoria/televisores'}>
                Televisores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/categoria/consolas'}>
                Consolas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/cart'}>
              <CartWidget />
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    
    
    </>);
}

export default NavBar;
