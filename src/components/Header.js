import * as React from "react";
import { useState, useEffect } from "react";
import { AppBar, Box, Typography, Menu, MenuItem, Button } from "@mui/material";
import { Container } from "@mui/system";
import Logo from "../images/logo.jpg";
import { Link, useLocation, NavLink } from "react-router-dom";

export default function Header() {
  const [sticky, setSticky] = useState("");
  const pages = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Your Benefits", path: "/your benefits" },
    { label: "Funding & Investment", path: "/Funding & Investment" },
    { label: "Scam", path: "/scam" },
    { label: "Contact Us", path: "/contact us" },
  ];
  const location = useLocation();

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop > 80 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    // debugger;
    setIsChecked(!isChecked);

    if (!isChecked) {
      document.body.classList.add("open-menu");
    } else {
      document.body.classList.remove("open-menu");
    }
  };
  const handleCloseMenu = () => {
    handleToggle();
  };
  return (
    <>
      <AppBar className={`navbar ${sticky}`}>
        <Container className="container">
          {/* <Box sx={{ display: "flex" }}> */}
          <a href="/home" className="logo">
            <img src={Logo} />
          </a>
          <Menu className="responsive-menu">
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <div className={isChecked ? "navbar-icon clicked" : "navbar-icon"}>
            <input type="checkbox" id="checkbox" onChange={handleToggle} />
            <label for="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
          <Box
            className={
              isChecked
                ? "navbar-menu menu-list checked"
                : "navbar-menu menu-list"
            }
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                component={NavLink}
                to={page.path}
                activeClassName="active"
                className="menu"
                sx={{ my: 2, color: "white" }}
                onClick={() => handleCloseMenu()}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          {/* </Box> */}
        </Container>
      </AppBar>
    </>
  );
}
