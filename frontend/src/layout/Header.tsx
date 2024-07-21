import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

import "../css/header.css";

import logo from '/img/logo.png'

const Header = () => {
  return (
    <header>
      <nav id="navbar">
        <div id="store-id">
          <NavLink to="/">
            <img
              // src="https://res.cloudinary.com/dqs5ckpbp/image/upload/v1721336504/logos/logo_w2lfjn.png"
              src={logo}
              alt="logo"
            />
          </NavLink>
        </div>
        <div id="search-bar">
          <TextField
            id="outlined-basic"
            label="Search products"
            variant="outlined"
          />
        </div>
        <ul>
          <li>
            <NavLink to="/">
              <Button variant="text">Home</Button>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard">
              <Button variant="text">Dashboard</Button>
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/products">
              <Button variant="text">Products</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <Button variant="text">About</Button>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/cart">
              <Button>
                <ShoppingCartSharpIcon />
              </Button>
            </NavLink>
          </li>
          <li>
            <Button variant="text">
              <LightModeIcon />
              {/* <DarkModeIcon></DarkModeIcon> */}
            </Button>
          </li>
          <li>
            <NavLink to="/dashboard">
              <Button variant="text">
                <AccountBoxSharpIcon />
              </Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
