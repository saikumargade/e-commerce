import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
export default class Navbar extends React.Component {
  handleEnter = e => {
    if (e.key === "Enter") console.log("clicked enter");
  };
  render() {
    return (
      <header className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Home
          </Button>
        </Link>
        <input placeholder="Search" onKeyPress={this.handleEnter}></input>
        <Link style={{ textDecoration: "none" }}>
          <Button variant="outlined">Sign In</Button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Cart
          </Button>
        </Link>
      </header>
    );
  }
}
