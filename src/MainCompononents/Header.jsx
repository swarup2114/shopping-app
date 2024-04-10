import React, { useState } from "react";
import "../componentsstyles/header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// import { useSelector,useDispatch } from "react-redux";

const Header = () => {
  let userAvailable = localStorage.getItem("isAuthnteic");

  const [isUserIcon, setIsUserIcon] = useState(false);

  const showUserInfo = () => {
    setIsUserIcon(!isUserIcon);
  };
  return (
    <div className="header-container">
      <div className="logo">
        <NavLink to="/">
          <img
            src="https://t4.ftcdn.net/jpg/04/29/34/73/240_F_429347385_1sHIAncOz3qqmqe2JN9FWKsRABliseLj.jpg"
            alt="abc"
          />
        </NavLink>
      </div>

      <div className="nav-items">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/new-arivals">NewArivals</NavLink>
        <NavLink to="/trending">Trending</NavLink>
        <NavLink to="/about">Reviews</NavLink>
        {userAvailable ? (
          <NavLink>
            <FaCartPlus />
          </NavLink>
        ) : (
          <NavLink>
          <AccountCircleIcon
            onClick={showUserInfo}
            style={{ color: "white" }}
          />
          </NavLink>
        )}

        {isUserIcon && (
          <div className="user-info-show">
            <NavLink to="/signup" onClick={() => showUserInfo(false)}>
              signup
            </NavLink>
            <NavLink to="/login" onClick={() => showUserInfo(false)}>
              Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;



