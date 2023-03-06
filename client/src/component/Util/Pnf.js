import { Box, Button, Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Pnf() {
  return (
    <Container
      align="center"
      sx={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <NavLink to={`/menu`} style={{ textDecoration: "none" }}>
        <Button variant="outlined">Explore Our Menu</Button>
      </NavLink>
      <Box sx={{ marginTop: "-100px" }}>
        <img
          src="https://res.cloudinary.com/dgcy4qkiz/image/upload/v1661452125/pnf_ifgafl.jpg"
          height="500px"
          widht="80%"
          alt="Page not found image"
        />
      </Box>
    </Container>
  );
}

export default Pnf;
