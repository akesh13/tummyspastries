import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import axios from "axios";
import ClearIcon from '@mui/icons-material/Clear';
import '../../style/CssStyle/index.css'

function Cart() {
  const data = useContext(GlobalContext);
  const [cart, setCart] = data.authApi.cart;
  const orderUpdate = data.authApi.orderUpdate;
  const [token] = data.token;
  const [finalTotal, setFinalTotal] = data.authApi.finalTotal;
  const [order, setOrder] = data.authApi.order;

  const [total, setTotal] = useState(0); // total price
  const [gst, setGst] = useState(5); // gst -> cgst & sgst
  const [dc, setDC] = useState(30); // delivery charge

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
      let gstTotal = Math.round(total * (5 / 100));
      let final = total + gstTotal + dc;
      setFinalTotal(final);
    };
    getTotal();
  }, [cart]);

  // inc count of items
  const incCount = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
    updateCart(cart);

    setOrder(cart, finalTotal);
    storeOrder(cart, finalTotal);
  };

  // to dec count of items
  const decCount = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
    updateCart(cart);

    setOrder(cart, finalTotal);
    storeOrder(cart, finalTotal);
  };

  // to update cart
  const updateCart = async (cart) => {
    await axios.patch(
      `/api/v1/auth/addToCart`,
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  // delete item from cart
  const delItem = (id) => {
    if (window.confirm(`Do you want to remove product?`)) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
      updateCart(cart);

      // setOrder(cart,finalTotal)
      // storeOrder(cart,finalTotal)
    }
  };

  const storeOrder = async (cart, finalTotal) => {
    await orderUpdate(cart, finalTotal);
  };

  if (cart.length === 0) {
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
        <img src="https://www.cakezone.com/themes/organie1/img/general-img/empty-cartillust.png" />
      </Box>
    );
  }

  return (
    <Container>
      <Box sx={{ paddingTop: "150px",  }}>
        <Typography align="start" sx={{ paddingTop: 0 }}>
          <span className="text-muted"> Home / Menu /</span> Cart
        </Typography>

        <Grid container sx={{ mt: 2 }} spacing={2} >
          <Grid item lg={7} xs={12}>
            <TableContainer component={Paper} sx={{boxShadow:"none"}}>
              <Table>
                {/* <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Title
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Image
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Price
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Qnty
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Count
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead> */}
                <TableBody>
                  {cart &&
                    cart.map((item, index) => {
                      const { _id, title, image, price, qnty, quantity } = item;
                      return (
                        <TableRow key={index}>
                          <TableCell align="center">
                          <img src={image.url} alt="" height={70} width={90} />
                        </TableCell>
                          <TableCell align="center">{title}</TableCell>
                          
                          {/* <TableCell align="center">&#8377; {price}</TableCell> */}
                          {/* <TableCell align="center">{qnty}</TableCell> */}
                          <TableCell align="center">
                            <Box
                              sx={{ display: "flex", justifyContent: "center", border:"1px solid #7cff28", borderRadius:"30px" }}
                            >
                              <Button
                                // variant="outlined"
                                color="error"
                                size="small"
                                sx={{ padding: 0, minWidth: "" }}
                                onClick={() => decCount(_id)}
                              >
                                <RemoveIcon sx={{ display: "inline-block" }} />
                              </Button>
                              <Typography
                                fontWeight={600}
                                sx={{ padding: "0px 8.9px" }}
                              >
                                {quantity}
                              </Typography>
                              <Button
                                // variant="outlined"
                                size="small"
                                sx={{ padding: 0, minWidth: "35px" }}
                                onClick={() => incCount(_id)}
                              >
                                <AddIcon />
                              </Button>
                            </Box>
                          </TableCell>
                          <TableCell align="center">
                            <ClearIcon
                              onClick={() => delItem(_id)}
                            />
                          </TableCell>
                          <TableCell align="center">&#8377; {price}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item lg={5} xs={12} sx={{marginBottom:"50px"}}>
            <Card sx={{backgroundColor : "#ffe3ec", height :"65vh", borderRadius:"20px", padding:"20px 15px" }}>
              <CardHeader align="center" title="Order detials" />
              <CardContent sx={{border:"1px solid #191919", borderRadius:"20px", backgroundColor: "#fff5f8"}}>
                <Box
                  sx={{
                    display: "flex",
                    mt: 0,
                    justifyContent: "space-between",
                    mb: 2
                  }}
                >
                  <Typography variant="h6" >
                    Order price
                  </Typography>
                  <Typography variant="h6">&#8377;{total}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 1.5,
                    justifyContent: "space-between",
                    mb: 2
                  }}
                >
                  <Typography variant="h6" >
                    Gst <span className="text-muted">(cgst + sgst)</span>
                  </Typography>
                  <Typography variant="h6">{gst} %</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 1.5,
                    justifyContent: "space-between",
                    mb: 2
                  }}
                >
                  <Typography variant="h6" >
                    Delivery Charges
                  </Typography>
                  <Typography variant="h6">&#8377;{dc}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 1.5,
                    justifyContent: "space-between",
                    mb: 2
                  }}
                >
                  <Typography variant="h6" >
                    Order total
                  </Typography>
                  <Typography variant="h6">&#8377; {finalTotal}</Typography>
                </Box>
              </CardContent>
              <CardActions
                sx={{ display: "flex", mt: 1.5, justifyContent: "center", marginTop:"60px" }}
              >
                <NavLink
                  to={`/checkout/${finalTotal}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="contained" className="cktbtn">Continue to checkout</Button>
                </NavLink>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Cart;
