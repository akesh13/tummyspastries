import React from "react";
import { Box } from "@mui/material";

function UserDashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src="https://res.cloudinary.com/dgcy4qkiz/image/upload/v1661440184/under-construction_i4fuxm.jpg"
        alt="Feature under construction"
      />
    </Box>
  );
}

export default UserDashboard;
