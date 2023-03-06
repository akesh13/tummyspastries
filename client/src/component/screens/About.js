import {
  Box,
  Stack,
  Typography,
  MenuList,
  MenuItem,
  Grid,
  Container,
} from "@mui/material";
import "../../style/CssStyle/index.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function About() {
  return (
    <Box sx={{ mt: "80px" }}>
      <Stack
        sx={{
          background: `url(${"https://res.cloudinary.com/dhina/image/upload/v1661316033/ProjectImage/bg-1_wo77vh.jpg"})center`,
          backgroundSize: "cover",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" fontWeight={600} color="#fff">
          About us
        </Typography>
        <MenuList sx={{ display: "flex" }}>
          <MenuItem sx={{ padding: "0px", height: "0px" }}>
            <NavLink
              to={`/`}
              className="Menulist"
              style={{ paddingRight: "20px" }}
            >
              Home
            </NavLink>
            <Typography
              color={"#fff"}
              className="dot"
              sx={{ cursor: "default" }}
            >
              About us
            </Typography>
          </MenuItem>
        </MenuList>
      </Stack>
      <Box pt={5} pb={6}>
        <Box className="lineContainer">
          <Typography
            align="center"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#f4474a",
              fontFamily: "Dancing Script, cursive",
            }}
            className="line"
          >
            About us
          </Typography>
        </Box>
        <Typography
          variant="h4"
          align="center"
          mt={1}
          sx={{ fontWeight: "600" }}
        >
          Welcome to PizzaWorld
        </Typography>
        <Container>
          <Grid container mt={3}>
            <Grid
              item
              lg={5}
              xs={12}
              sx={{
                display: "flex",
                height: "80vh",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography variant="h3" fontWeight={700}>
                  We Serve The Best Pizza Of The Country
                </Typography>
                <Typography mt={4}>
                  We are the country's no.1 Fast food retailer. Country's best
                  pizza are delivered by us. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Consequatur est fuga corrupti
                  saepe eius excepturi deleniti cum corporis magnam, tempora ad
                  harum accusantium cupiditate eum ullam tenetur similique vitae
                  minus. We gain the satisfaction of our customers with our
                  delicate service and extreme high food quality.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={7} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://res.cloudinary.com/dhina/image/upload/v1661316264/ProjectImage/aboutMain_nvpcpw.webp"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
          <Box className="lineContainer" sx={{ mt: 3 }}>
            <Typography
              align="center"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#f4474a",
                fontFamily: "Dancing Script, cursive",
              }}
              className="line"
            >
              Chef
            </Typography>
          </Box>
          <Typography
            variant="h4"
            align="center"
            mt={1}
            sx={{ fontWeight: "600" }}
          >
            Our chef
          </Typography>
          <Grid container align="center" sx={{ mt: 4 }}>
            <Grid item lg={3} xs={12} sm={6} sx={{ mt: 2 }}>
              <img
                src="https://res.cloudinary.com/dhina/image/upload/v1661316264/ProjectImage/chef-1_q2fjme.png"
                alt="chef"
              />
              <Typography
                variant="h5"
                color="#ffcf3f"
                fontWeight={600}
                sx={{ mt: 2 }}
              >
                Dharani
              </Typography>
              <Typography variant="h6">Senior Chef</Typography>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} sx={{ mt: 2 }}>
              <img
                src="https://res.cloudinary.com/dhina/image/upload/v1661316292/ProjectImage/chef-2_azu1lh.png"
                alt="chef"
                style={{ height: "260px", width: "250px" }}
              />
              <Typography
                variant="h5"
                color="#ffcf3f"
                fontWeight={600}
                sx={{ mt: 2 }}
              >
                Dhanush
              </Typography>
              <Typography variant="h6">Senior Chef</Typography>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} sx={{ mt: 2 }}>
              <img
                src="https://res.cloudinary.com/dhina/image/upload/v1661316292/ProjectImage/chef-3_zp3yjk.png"
                alt="chef"
              />
              <Typography
                variant="h5"
                color="#ffcf3f"
                fontWeight={600}
                sx={{ mt: 2 }}
              >
                Priya
              </Typography>
              <Typography variant="h6">Junior Chef</Typography>
            </Grid>
            <Grid item lg={3} xs={12} sm={6} sx={{ mt: 2 }}>
              <img
                src="https://res.cloudinary.com/dhina/image/upload/v1661316291/ProjectImage/chef-4_nujus4.png"
                alt="chef"
                style={{ height: "260px", width: "250px" }}
              />
              <Typography
                variant="h5"
                color="#ffcf3f"
                fontWeight={600}
                sx={{ mt: 2 }}
              >
                Vikram
              </Typography>
              <Typography variant="h6">Junior Chef</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default About;
