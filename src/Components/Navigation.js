import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import cookie from "cookie";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";

const Navigation = (props) => {
  console.log(props.user);
  const cookies = cookie.parse(document.cookie);
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <IconButton color="secondary">
            <LocalCafeIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Nectar Of The Gods
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Button>
                <Link to="/">LISTINGS</Link>
              </Button>
            </li>
            <li className="nav-list-item">
              {document.cookie === "loggedIn=true" && (
                <div>
                  <Button>
                    <Link to="/Add">ADD</Link>
                  </Button>
                  <Button
                    onClick={() => {
                      document.cookie = "loggedIn=";
                      window.location.replace("/login");
                    }}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </li>
            <li className="nav-list-item">
              {document.cookie !== "loggedIn=true" && (
                <Button
                  onClick={() => {
                    document.cookie = "loggedIn=";
                    window.location.replace("/login");
                  }}
                >
                  Login
                </Button>
              )}
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Typography color="text-primary">
        {cookies.loggedIn && (
          <span className="welcome-message">
            Welcome Back{" "}
            <span
              style={{
                color: "#red",
                letterSpacing: "3px",
                fontWeight: "bold",
              }}
            >
              {props.user}
            </span>
            !
          </span>
        )}
      </Typography>
    </div>
  );
};

export default Navigation;
