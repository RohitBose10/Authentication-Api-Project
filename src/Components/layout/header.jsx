import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

export const Navbar = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#008080", padding: "0.5rem 2rem" }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
      >
        {!token ? (
          <>
            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              to="/"
              sx={{
                borderColor: "#ffffff",
                color: "#ffffff",
                ":hover": { backgroundColor: "#005757" },
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              variant="contained"
              component={Link}
              to="/signup"
              sx={{
                backgroundColor: "#ffffff",
                color: "#008080",
                ":hover": { backgroundColor: "#e0f7f7" },
              }}
            >
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              to="/profile"
              sx={{
                borderColor: "#ffffff",
                color: "#ffffff",
                ":hover": { backgroundColor: "#005757" },
              }}
            >
              Profile
            </Button>
            <Button
              color="inherit"
              variant="contained"
              onClick={handleLogout}
              sx={{
                backgroundColor: "#ffffff",
                color: "#008080",
                ":hover": { backgroundColor: "#e0f7f7" },
              }}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
