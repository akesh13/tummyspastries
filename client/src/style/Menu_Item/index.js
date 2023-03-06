import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";


export const MenuGridContainer = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        justifyContent: 'center'
    },
}));