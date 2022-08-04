import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import { Container } from "@mui/system";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { auth, logOut } from "../services/authentications/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const NavBar = () => {
  const [user, isLoading] = useAuthState(auth);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const pages = [
    {
      name: "AllGames",
      href: "/",
    },
    { name: "PC", href: "/" },
    {
      name: "Browser",
      href: "/",
    },
  ];
  const logOutHandler = () => {
    logOut();
    // navigate("/login");
  };
  const settings = [
    { name: "Profile", fn: () => {}, href: "" },
    { name: "Logout", fn: logOutHandler, href: "/login" },
  ];
  // const settings = ["Profile", "Logout"];
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const searchChangeHanlder = (event) => {
    setSearchValue(event.target.value);
  };
  const searchSubmitHandler = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?q=${searchValue}`);
    }
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsEsportsIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "rgba(246,215,176,1)",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dust
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SportsEsportsIcon
            sx={{
              display: { xs: "flex", md: "none" },
              color: "rgba(246,215,176,1)",
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dust
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <input
            type={"search"}
            value={searchValue}
            onKeyPress={searchSubmitHandler}
            onChange={searchChangeHanlder}
          ></input>
          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={user?.email}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user?.email} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={setting.fn}
                      href={setting.href}
                      textDecoration="none"
                    >
                      {setting.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button
              sx={{ color: "white", backgroundColor: "brown" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
