import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    height: "100vh",
    width: "100vw",
    paddingTop: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
    paddingTop: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "100vh",
    paddingTop: 40,
  },
  [theme.breakpoints.up("md")]: {
    height: "100vh",
    paddingTop: 0,
  },
}));

export const HeaderContent = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: 40,
  },
  [theme.breakpoints.up("md")]: {
    marginTop: 0,
  },
}));

export const HeaderImage = styled("img")(({ theme }) => ({
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
  },
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
}));

export const HeaderSmallText = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    marginTop: 10,
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: 20,
  },
  [theme.breakpoints.up("md")]: {
    marginTop: 10,
  },
}));
