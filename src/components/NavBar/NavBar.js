import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/commerce.png";
import useStyles from "./navBarStyles";
import { Link, useLocation } from "react-router-dom";
const NavBar = ({ totalItems }) => {
  const styles = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" color="inherit" className={styles.appBar}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            color="inherit"
            className={styles.title}
          >
            <img
              src={logo}
              alt="commerce.js"
              height="25px"
              className={styles.image}
            />
            commerce.js
          </Typography>
          <div className={styles.grow} />
          <div className={styles.button}>
            {location.pathname === "/" && (
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
