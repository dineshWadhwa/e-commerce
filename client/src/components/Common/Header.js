import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../Context/Context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const { logindata, setLoginData } = useContext(LoginContext);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = async () => {
    let token = localStorage.getItem("usersdatatoken");
    // console.log(token);
    const res = await fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "appplication/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 201) {
      console.log("user logout");
      let token = localStorage.removeItem("usersdatatoken");
      setLoginData(false);
      navigate("/");
    } else {
      console.log("error in logout");
    }
  };

  const goError = () => {
    navigate("*");
  };

  const goDash = () => {
    navigate("/dash");
  };

  const goLogin = () => {
    navigate("/login");
  };

  const goSignIn = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="container-fluid text-center ">
        <div className="row bg-dark text-white ">
          <div className="col-4 mt-2">
            <h6>
              <i className="fa-solid fa-truck"></i>&nbsp;Free Shipping
            </h6>
          </div>
          <div className="col-4 mt-2">
            <h6>
              <i className="fa-solid fa-credit-card"></i>&nbsp;Payment Methods
            </h6>
          </div>
          <div className="col-4 mt-2">
            <h6>
              <i className="fa-solid fa-phone"></i>&nbsp;Call us 935-027-5466
            </h6>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            MERN Store
          </NavLink>
          <form className="d-flex mx-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink
                  className="nav-link m-2 cart-trolley--link"
                  to="/cart"
                >
                  <ShoppingCartIcon className="cart-trolley" />
                  <span className="cart-total--item">1</span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link m-2" to="/products">
                  PRODUCTS
                </NavLink>
              </li>

              <li>
                <div className="avtar p-2">
                  {logindata.ValidUserOne ? (
                    <Avatar
                      style={{
                        background: "green",
                        fontWeight: "bold",
                        textTransform: "capitalize",
                      }}
                      onClick={handleClick}
                    >
                      {logindata.ValidUserOne.fname[0]}
                    </Avatar>
                  ) : (
                    <Avatar
                      style={{ background: "blue" }}
                      onClick={handleClick}
                    />
                  )}
                </div>
              </li>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {logindata.ValidUserOne ? (
                  <>[
                    <MenuItem
                      onClick={() => {
                        goDash();
                        handleClose();
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        logoutUser();
                        handleClose();
                      }}
                    >
                      Logout
                    </MenuItem>
                  ]</>
                ) : (
                  <>
                    <MenuItem
                      onClick={() => {
                        goError();
                        handleClose();
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        goLogin();
                        handleClose();
                      }}
                    >
                      Login
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        goSignIn();
                        handleClose();
                      }}
                    >
                      SignIn
                    </MenuItem>
                  </>
                )}
              </Menu>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
