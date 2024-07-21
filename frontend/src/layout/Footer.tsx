import { NavLink } from "react-router-dom";
import "../css/footer.css";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          culpa.
        </h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <Button variant="text">Home</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <Button variant="text">About Us</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <Button variant="text">Our Products</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
