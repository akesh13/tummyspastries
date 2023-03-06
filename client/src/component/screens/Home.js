import { Button, Container, Grid, Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import "../../style/CssStyle/index.css";
import { NavLink } from "react-router-dom";
import { HeaderBox, HeaderContent, HeaderText } from "../../style/HomeStyle";
import Footer from "../../component/screens/Footer";
import { GlobalContext } from "../../GlobalContext";

function Home() {
  const data = useContext(GlobalContext);
  const [isAdmin] = data.authApi.isAdmin;
  return (
    <Box>
      <HeaderBox
        sx={{
          background: `url(${"https://res.cloudinary.com/dgcy4qkiz/image/upload/v1661434242/banner_mtapo0.jpg"})center`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Container>
          <HeaderContent container>
            <Grid
              item
              lg={6}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "225px",
              }}
            >
              <HeaderText
                variant="h2"
                component="div"
                color="#36241c"
                sx={{
                  fontWeight: "400",
                  ml: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                'A SLICE OF HEAVEN' is how our exquisite range of pastries is
                described.
              </HeaderText>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" className="mainButton1">
                  <NavLink
                    to={`/menu`}
                    style={{
                      textDecoration: "none",
                      color: "#e3cfd0",
                      fontWeight: "400",
                      padding: "10px 2px",
                    }}
                    className="mainButtonLink1"
                  >
                    {isAdmin ? (
                      <Typography>Modify menu</Typography>
                    ) : (
                      <Typography>Order now </Typography>
                    )}
                  </NavLink>
                </Button>
              </Box>
            </Grid>
          </HeaderContent>
        </Container>
      </HeaderBox>
      <Footer />
    </Box>
  );
}

export default Home;
