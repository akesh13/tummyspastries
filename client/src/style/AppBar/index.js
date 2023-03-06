import {
  Box,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyList = styled(MenuList)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MyItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const HrLine = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const LogoContent = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItem: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
}));
export const LogoContentTwo = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

export const CartIcon = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    right: "50px"
  },
}));
export const AppBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: "100vw",
  },
}));

export const IconMenu = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const Logo = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
