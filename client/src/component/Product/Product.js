import React from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Box,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StarIcon from "@mui/icons-material/Star";
import "../../style/CssStyle/index.css";

const noImage =
  "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";

function Product(props) {
  const { _id, title, price, image, desc, stock, qnty, rating, isAdmin, del } =
    props;
  return (
    <React.Fragment>
      {stock === 0 ? null : (
        <Grid item lg={3} xs={12} sx={{ mt: 2 }}>
          <Card className="menuCard" sx={{ position: "relative" }}>
            <Chip
              sx={{
                fontSize: "1.3rem",
                position: "absolute",
                border: "none",
                zIndex: "100",
                right: 0,
              }}
              variant="outlined"
              icon={<StarIcon style={{ color: "#ffcf3f" }} />}
            />
            {/* <Typography color={'#ed686e'} variant="h6" sx={{position: 'absolute', right: '2%', fontWeight: 600}}>
              Hot
            </Typography> */}
            <Box
              className="action"
              sx={{
                backgroundColor: "white",
                display: "inline-block",
                borderRadius: "30px",
                padding: "4px",
                position: "absolute",
                top: "65%",
                left: "43%",
                opacity: 0,
                transition: "0.5s all",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                zIndex: "100",
              }}
            >
              <NavLink
                to={`/product/details/${_id}`}
                style={{ textDecoration: "none" }}
              >
                <VisibilityOutlinedIcon
                  style={{
                    padding: "0px 7px",
                    fontSize: "2rem",
                    color: "#fa7e1e",
                    fontWeight: "lighter",
                  }}
                />
              </NavLink>
            </Box>
            {image.url ? (
              <Box
                className="menu_Card_Media"
                sx={{ overflow: "hidden", height: 230 }}
              >
                <CardMedia
                  className="menu_CardMedia_img"
                  component="img"
                  height={"100%"}
                  image={image.url}
                  alt={title}
                  sx={{ transition: "0.7s" }}
                />
              </Box>
            ) : (
              <Box className="menu_Card_Media" sx={{ overflow: "hidden" }}>
                <CardMedia
                  className="menu_CardMedia_img"
                  component="img"
                  image={noImage}
                  alt={"No Image Found"}
                  sx={{ transition: "0.7s" }}
                />
              </Box>
            )}
            <CardContent style={{ backgroundColor: "#f5f6fb" }}>
              <Typography align="center" variant="h6">
                {title}
              </Typography>
              <Typography align="center" color={"#ffcf3f"} fontWeight={600}>
                &#8377; {price}
              </Typography>
            </CardContent>
            {isAdmin ? (
              <CardActions
                style={{ backgroundColor: "#f5f6fb" }}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <NavLink
                  to={`/product/update/${_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="contained" endIcon={<EditIcon />}>
                    Edit
                  </Button>
                </NavLink>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => del(_id)}
                  endIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </CardActions>
            ) : null}
          </Card>
        </Grid>
      )}
    </React.Fragment>
  );
}

export default Product;
