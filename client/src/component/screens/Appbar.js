import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  MenuList,
  Stack,
  Menu,
  MenuItem,
  Button,
  Drawer,
  IconButton,
  Badge,
} from "@mui/material";
import { Container } from "@mui/system";
import "../../style/CssStyle/index.css";
import {
  AppBox,
  CartIcon,
  IconMenu,
  Logo,
  LogoContent,
  LogoContentTwo,
  MyItem,
  MyList,
} from "../../style/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import DashboardIcon from "@mui/icons-material/Dashboard";

import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const drawerWidth = 300;

function Appbar(props) {
  const data = useContext(GlobalContext);
  const [user] = data.authApi.userData;
  const context = useContext(GlobalContext);

  const [isLogged, setIsLogged] = context.authApi.isLogged;
  const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
  const [isUser, setIsUser] = context.authApi.isUser;
  const [cart] = context.authApi.cart;

  const navigate = useNavigate();

  // Drawer
  // const [anchorNav, setAnchorNav] = useState(null);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const logoutUser = async () => {
    if (window.confirm(`Are you sure to logout?`)) {
      await axios.get(`/api/v1/auth/logout`);
      localStorage.clear();
      if (isAdmin) {
        setIsAdmin(false);
      }
      if (isUser) {
        setIsUser(false);
      }
      setIsLogged(false);
      toast.success("Successfully Logout");
      navigate("/");
      window.location.href = "/";
    } else {
      toast.warning("Logout terminated");
    }
  };

  // DropDown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /* common route */
  const commonRoute = () => {
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // marginRight: "20px",
          }}
        >
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={
              <KeyboardArrowDownIcon
                style={{
                  color: "#3b251a",
                  backgroundColor: "#a9ff29",
                  border: "2px solid #3b251a",
                  borderRadius: "50%",
                }}
              />
            }
          >
            <NavLink
              to={`#`}
              style={{ textDecoration: "none", color: "#3b251a" }}
            >
              {isUser ? (
                <Typography variant="subtitle1">{user.name}</Typography>
              ) : (
                <Typography variant="subtitle1">Admin</Typography>
              )}
            </NavLink>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              alignItems: "left",
            }}
          >
            <MenuItem onClick={handleClose}>
              <AccountBoxIcon
                style={{
                  // marginRight: "7px",
                  color: "#5c3d2f",
                  fontSize: "1.5rem",
                }}
              />
              <NavLink
                to={`/profile`}
                style={{ textDecoration: "none", color: "#000" }}
              >
                Profile
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <DashboardIcon
                style={{
                  // marginRight: "7px",
                  color: "#5c3d2f",
                  fontSize: "1.5rem",
                }}
              />
              {isUser ? (
                <NavLink
                  to={`/user/dashboard`}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  User Dashboard
                </NavLink>
              ) : (
                <NavLink
                  to={`/admin/dashboard`}
                  style={{ textDecoration: "none", color: "#5c3d2f" }}
                >
                  Admin Dashboard
                </NavLink>
              )}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <DeliveryDiningIcon
                style={{
                  // marginRight: "7px",
                  color: "#5c3d2f",
                  fontSize: "1.5rem",
                }}
              />
              <NavLink
                to={`/orders`}
                style={{ textDecoration: "none", color: "#5c3d2f" }}
              >
                Orders
              </NavLink>
            </MenuItem>
            <MenuItem onClick={logoutUser}>
              <LogoutIcon
                style={{
                  // marginRight: "7px",
                  color: "#5c3d2f",
                  fontSize: "1.5rem",
                }}
              />
              <NavLink
                to={`/`}
                style={{ textDecoration: "none", color: "#000" }}
              >
                Logout
              </NavLink>
            </MenuItem>
          </Menu>
          {isUser ? (
            <CartIcon>
              <Badge
                color="secondary"
                badgeContent={cart.length > 0 ? cart.length : 0}
              >
                <NavLink to={`/product/cart`}>
                  <LocalMallIcon style={{ color: "#3b251a" }} />
                </NavLink>
              </Badge>
            </CartIcon>
          ) : null}
        </Box>
      </Box>
    );
  };

  return (
    <AppBox>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "transparent",
          height: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
          boxShadow: "none",
        }}
      >
        <Container sx={{ padding: "0px", marginLeft: "6%" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              padding: 0,
              width: "90%"
            }}
          >
            <IconMenu onClick={handleDrawerOpen}>
              <MenuIcon style={{ color: "#5c3d2f" }} />
            </IconMenu>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              variant="temporary"
              anchor="left"
              onClose={() => {
                handleDrawerClose();
              }}
              open={openDrawer}
            >
              <DrawerHeader>
                <Typography sx={{ flexGrow: 1 }}>tummy's Pastries</Typography>
                <IconButton onClick={handleDrawerClose}>
                  <CloseIcon style={{ color: "#5c3d2f" }} />
                </IconButton>
              </DrawerHeader>

              <MenuList>
                <NavLink
                  onClick={handleDrawerClose}
                  to={`/`}
                  className="list"
                  style={{ color: "#5c3d2f" }}
                >
                  <MyItem>Home</MyItem>
                </NavLink>
                <NavLink
                  onClick={handleDrawerClose}
                  to={`/menu`}
                  className="list"
                  style={{ color: "#5c3d2f" }}
                >
                  <MyItem>Menu</MyItem>
                </NavLink>
                <NavLink
                  onClick={handleDrawerClose}
                  to={`/login`}
                  className="list"
                  style={{ color: "#5c3d2f" }}
                >
                  <MyItem>login</MyItem>
                </NavLink>
              </MenuList>
            </Drawer>
            <NavLink to={`/`} style={{ textDecoration: "none", flexGrow: 1 }}>
              <Stack direction={"row"}>
                <Box sx={{ display: "flex" }}>
                  <Logo>
                    <StorefrontIcon
                      sx={{ height: "35px", width: "35px" }}
                      style={{ color: "#3b251a" }}
                    />
                  </Logo>
                  <LogoContent
                    variant="h6"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: 500,
                      color: "#3b251a",
                      fontSize: "20px",
                    }}
                  >
                    tummy's
                    <LogoContentTwo color={"#87cc20"} sx={{ fontSize: "24px" }}>
                      Pastries
                    </LogoContentTwo>
                  </LogoContent>
                </Box>
              </Stack>
            </NavLink>
            <Box display="flex" alignItems="flex-end">
              <MyList sx={{ display: "flex", flexGrow: 1 }}>
                <NavLink to={`/`} className="list">
                  <MyItem>Home</MyItem>
                </NavLink>

                <NavLink to={`/menu`} className="list">
                  <MyItem>Menu</MyItem>
                </NavLink>
              </MyList>
            </Box>
            {isLogged ? (
              commonRoute()
            ) : (
              <MyList sx={{ display: "flex" }}>
                <NavLink to={`/login`} className="list">
                  <MyItem>Log In</MyItem>
                </NavLink>
                <NavLink to={`/register`} className="list">
                  <MyItem>Register</MyItem>
                </NavLink>
              </MyList>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </AppBox>
  );
}

export default Appbar;
