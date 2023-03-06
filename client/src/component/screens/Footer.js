import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  MenuItem,
  MenuList,
  Typography,
  
  TextField
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import "../../style/CssStyle/index.css";
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  FooterFlag,
  FooterGrid,
  FooterHeader,
  FooterHeaderText,
  FooterMain,
  FooterMenuAlign,
} from "../../style/Footer";
// import Select from '@mui/material/Select';

function Footer() {
  return (
    <FooterMain pt={2} style={{ backgroundColor: "#170600" }}>
      <Container sx={{ paddingTop: 6 }}>
        <FooterHeader
          sx={{ display: "flex", justifyContent: "space-between" }}
        ></FooterHeader>
        <Grid container sx={{ mt: "20px" }}>
          <FooterGrid item lg={3} xs={12} sm={3}>
            <FooterMenuAlign>
              <Typography fontWeight={500} color={"#fff"}>
                ABOUT BUISNESS
              </Typography>
              <MenuList
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    To be the best in the industry
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Since in 1990
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Make affordable service
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                ></MenuItem>
              </MenuList>
            </FooterMenuAlign>
          </FooterGrid>
          <FooterGrid item lg={3} xs={12} sm={3}>
            <Box>
              <Typography fontWeight={500} color={"#fff"}>
                Reach US
              </Typography>
              <MenuList
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Bangalore, KA
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    +91 9548741311
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    tummysworld@info.com
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Mapcode for (latitude, longitude):
                    <br /> 12.976750, 77.575280
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Box>
          </FooterGrid>
          <FooterGrid item lg={3} xs={12} sm={3}>
            <Box>
              <Typography fontWeight={800} color={"#fff"}>
                Our offices
              </Typography>
              <MenuList
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Bangalore (HQ)
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "10px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    Chennai
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Box>
          </FooterGrid>
          <FooterGrid item lg={3} xs={12} sm={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontWeight={500} color={"#fff"}>
                SOCIAL LINKS
              </Typography>
              <MenuList
                sx={{
                  padding: 0,
                  display: "flex",
                }}
              >
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    mr: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    <LinkedInIcon
                      style={{
                        fontSize: "1.7rem",
                        color: "#fff",
                        margin: "2px 2px 2px 0px",
                      }}
                    />
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    mr: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    <InstagramIcon
                      style={{
                        fontSize: "1.7rem",
                        color: "#fff",
                        margin: 2,
                      }}
                    />
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    mr: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    <TwitterIcon
                      style={{
                        fontSize: "1.7rem",
                        color: "#fff",
                        margin: 2,
                      }}
                    />
                  </NavLink>
                </MenuItem>
                <MenuItem
                  sx={{
                    padding: 0,
                    display: "inline-block",
                    mt: "20px",
                    mr: "8px",
                    ":hover": { backgroundColor: "transparent" },
                  }}
                >
                  <NavLink to={`/`} className="FooterLink">
                    <YouTubeIcon
                      style={{
                        fontSize: "1.7rem",
                        color: "#fff",
                        margin: 2,
                      }}
                    />
                  </NavLink>
                </MenuItem>
              </MenuList>
            </Box>
          </FooterGrid>
        </Grid>
        <Divider color="#fff" sx={{ mt: 5, mb: 5 }} />
        <Grid item xs={12} sm={3}>
        <Typography variant="h5" component="p" color={"#ccc"}>
          tummy's Pastries NewsLetter
        </Typography>
        <Typography variant="body1" component="p" color={"#ccc"} style={{ marginBottom: 28 }}>
          Stay updated with new offers from tummy's Pastries
        </Typography>
        <TextField label="Your Email address" variant="outlined" />
        <Button className="footerbtn" >SEND</Button>
      </Grid>
        <Typography
          color={"#ccc"}
          sx={{ mt: 3, fontSize: "0.9rem", fontWeight: "lighter" }}
        >
          © Designed and developed by AKESH T A.
        </Typography>
      </Container>
    </FooterMain>
  ); 
}

export default Footer;
