import { useContext, useState } from "react";
import { Badge } from "react-bootstrap";
import { NavLink, Navigate } from "react-router-dom";
import Modal from "../modal/Modal";
import { cartContext } from "../App";

const Navbar = () => {
  const [cartView, setCartView] = useState(false);
  const {state,dispatch} = useContext(cartContext);
  const handleLogout = () =>{
    localStorage.removeItem("authToken");
    Navigate("/login");
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "lightgreen" }}
      >
        <NavLink className="navbar-brand fs-1 fw-semibold fst-italic text-white ms-4" to="/">
          GoFood
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item">
              <NavLink className="nav-link text-white fs-5" to="/">
                Home
              </NavLink>
            </li>
            {
              (!localStorage.getItem("authToken")) ? <li className="nav-item">
              <NavLink className="nav-link text-white fs-5" to="/login">
                LogIn
              </NavLink>
            </li> : ""
            }
            {
              (!localStorage.getItem("authToken")) ? <li className="nav-item">
              <NavLink className="nav-link text-white fs-5" to="/register">
                SignUp
              </NavLink>
            </li> : ""
            }
            {
              localStorage.getItem("authToken") ? <li className="nav-item">
              <NavLink className="nav-link text-white fs-5" to="/myorder">
                MyOrders
              </NavLink>
            </li> : ""
}
            {
              localStorage.getItem("authToken") ? <li className="nav-item mt-1 p-0">
              <button className="btn bg-white text-success mx-2" onClick={()=>setCartView(true)}>
                MyCart
                <Badge pill bg="danger"> {state.length} </Badge>
              </button>
              {cartView ? <Modal onClose={()=>setCartView(false)}></Modal> : null}
            </li> : ""
            }
            {
              localStorage.getItem("authToken") ? <li className="nav-item">
              <NavLink className="nav-link text-white fs-5" onClick={handleLogout}>
                Logout
              </NavLink>
            </li> : ""
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
