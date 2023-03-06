// import React from "react";
// import { Box } from "@mui/material";

// function Order() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       <img
//         src="https://res.cloudinary.com/dgcy4qkiz/image/upload/v1661440184/under-construction_i4fuxm.jpg"
//         alt="Feature under construction"
//       />
//     </Box>
//   );
// }

// export default Order;

import {
  Button,
  Container,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import CartList from "../Product/CartList";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function Order() {
  const context = useContext(GlobalContext);
  const [token] = context.token;
  const [userData] = context.authApi.userData;

  const [orders, setOrders] = useState([]);
  const [filteredCart, setFilteredCart] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      let res = await axios.get(`/api/v1/auth/orders`, {
        headers: { Authorization: token },
      });
      setOrders(res.data.orders);
    };
    getOrders();
  }, []);

  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = (orderId) => {
    // orders.forEach((item, index) => {
    //   if (item._id.cart) {
    //     orders.splice(index, 1);

    //   }
    // });

    let order = orders.filter((item) => item.orderId === orderId);
    setFilteredCart(order);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  if (orders.length === 0) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <Typography align="center" variant="h4">
            Hello, {userData.name}.
          </Typography>
          <img
            src="https://res.cloudinary.com/dhina/image/upload/v1661510552/ProjectImage/Order_Empty_bvix6k.png"
            alt=""
          />
          <NavLink
            to={`/menu`}
            style={{
              textDecoration: "none",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Button variant="outlined" startIcon={<KeyboardArrowLeftIcon />}>
              Explore Menu
            </Button>
          </NavLink>
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ paddingTop: "80px" }}>
      <Typography align="center" variant="h4">
        My Orders
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: "30px" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">OrderId</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Pay Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders &&
              orders.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.orderId}</TableCell>
                  <TableCell align="center">
                    {new Date(item.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell align="center">{item.orderStatus}</TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => handleOpen(item.orderId)}
                    >
                      View
                    </Button>
                    <CartList
                      cart={item.cart}
                      open={open}
                      handleClose={handleClose}
                    />
                  </TableCell>
                  <TableCell align="center">&#8377;{item.finalTotal}</TableCell>
                  <TableCell align="center">{item.paymentStatus}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Order;
