import { Box } from "@mui/material";
import { Container } from "@mui/system";
import "../../style/CssStyle/index.css";
import React from "react";

import MenuName from "./MenuName";

function Menu_Item() {
  return (
    <Box sx={{ mt: "80px" }}>
      <Box>
        <Container>
          <MenuName />
        </Container>
      </Box>
    </Box>
  );
}

export default Menu_Item;
