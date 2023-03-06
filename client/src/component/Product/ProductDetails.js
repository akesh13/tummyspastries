import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  CardHeader,
  Chip,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
import PaymentIcon from '@mui/icons-material/Payment';

function ProductDetails() {
  const data = useContext(GlobalContext);
  const [isAdmin] = data.authApi.isAdmin;

  const params = useParams();
  const [product, setProduct] = useState("");
  const addToCart = data.authApi.addToCart;

  const getSingle = async (id) => {
    let res = await axios.get(`/api/v1/product/get/${id}`);
    setProduct(res.data.product);
  };

  useEffect(() => {
    getSingle(params.id);
  }, []);

  return (
    <Container sx={{ paddingTop: "100px" }}>
      <Typography align="start" sx={{ paddingTop: 3 }}>
        <span className="text-muted"> Home / Menu /</span> {product.title}
      </Typography>
      <Grid container sx={{ paddingTop: "30px" }}>
        <Grid item lg={5} xs={12}>
          {!product ? null : (
            <CardMedia
              component="img"
              image={product.image.url}
              alt={product.title}
              sx={{borderRadius:"50px"}}
            />
          )}
        </Grid>
        <Grid item lg={7} xs={12}>
          <Card sx={{ paddingBottom: 1.5, boxShadow: "none" }}>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{ paddingLeft: "150px", paddingTop: "10px" }}
            >
              {product.title}
            </Typography>
            <CardContent>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
              >
                <Typography variant="h6" component={"div"}>
                  &#8377; {product.price} MRP
                  <Typography component={"del"} sx={{ paddingLeft: 0 }}>
                    {/* &#8377; {product.price + product.price * (10 / 100)} */}
                    &#8377;{" "}
                    <span className="text-danger">
                      {product.price + product.price * (10 / 100)}
                    </span>
                  </Typography>
                  <Typography>
                    <span className="text-success">* includes all taxes</span>
                  </Typography>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #dab8ad",
                    padding: "0px 10px",
                    borderRadius: "10px",
                  }}
                >
                  4.5 <StarIcon style={{ color: "#ffd965" }} />
                  <Typography>| 560 User ratings</Typography>
                  {/* <StarIcon style={{ color: "#ffd965" }} />
                  <StarIcon style={{ color: "#ffd965" }} />
                  <StarIcon style={{ color: "#ffd965" }} />
                  <StarIcon style={{ color: "#ffd965" }} /> */}
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography component={"strong"} variant="h5">
                  Quantity
                </Typography>

                <Typography variant="h6" sx={{ paddingLeft: 0.5 }}>
                  {product.qnty} <span className="text-success">pcs</span>
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h5">Product description</Typography>
                <Typography>{product.desc}</Typography>
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "felx", justifyContent: "space-around" }}
            >
              {isAdmin ? null : (
                <Grid item lg={8}>
                  <Button
                    onClick={() => addToCart(product)}
                    variant="contained"
                    className="productbtn"
                    sx={{ marginRight: "10px" }}
                  >
                    <AddShoppingCartIcon />
                    Add To Cart
                  </Button>
                  <Button
                    onClick={() => addToCart(product)}
                    variant="contained"
                    className="productbtn"
                  >
                    <FavoriteBorderIcon />
                     Wishlist
                  </Button>
                </Grid>
              )}
            </CardActions>
            <Grid
              sx={{
                // display: "flex",
                // justifyContent: "space-around",
                // alignItems: "center",
                margin: "20px 0px",
                marginLeft:"20px"
              }}
            >
              <Grid item lg={5} xs={12}></Grid>
              
              <Typography variant="h5" color="initial">
                Delivery options <DeliveryDiningIcon/> 
              </Typography>
              <Typography variant="inherit" color="initial">
                 <ElectricMopedIcon/> Super fast delivery
              </Typography>
              <Typography variant="inherit" color="initial">
                 <PaymentIcon/> Pay on delivery available
              </Typography>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
