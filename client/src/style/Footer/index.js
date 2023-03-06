import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterMain = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    height: "40vh",
  },
  [theme.breakpoints.up("md")]: {
    height: "74vh",
  },
}));

export const FooterHeader = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const FooterHeaderText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

export const FooterIcon = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
  },
}));

export const FooterMenu = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const FooterMenuItem = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const FooterGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

export const FooterFlag = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

export const FooterMenuAlign = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: "-60px",
  },
}));
