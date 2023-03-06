import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
  CardContent,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "../../style/CssStyle/index.css";

function Checkout() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const [token] = context.token;
  const [order, setOrder] = context.authApi.order;
  const [finalTotal] = context.authApi.finalTotal;
  const [cart, setCart] = context.authApi.cart;

  const [data, setData] = useState({
    address: "",
    paymentMode: "",
  });

  const readValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `/api/v1/order/newOrder`,
      {
        cart: cart,
        address: data.address,
        finalTotal: finalTotal, // changed
        paymentMode: data.paymentMode,
        paymentId: Math.floor(Math.random() * 12345689),
        paymentStatus: "unpaid",
      },
      {
        headers: { Authorization: token },
      }
    );
    toast.success("Order Confirmed Successfully");
    setCart([]);
    navigate("/");
    // window.location.href = "/";  // changed
  };
  const submit = () => {
    toast.success("checkout succesfull");
  };

  return (
    // <Container>
    //   <Grid
    //     container
    //     sx={{
    //       paddingTop: "110px",
    //       overflow: "hidden",
    //     }}
    //   >
    //     <Grid item xs={12}>
    //       <Typography variant="inherit" align="start">
    //         <span className="text-muted">Home/Cart/</span>Product checkout
    //       </Typography>
    //     </Grid>
    //   </Grid>

    //   <Container sx={{ display: "flex", justifyContent: "space-between" }}>
    // <Grid sx={{ marginTop: "20px", height:"", backgroundColor:"#d6baa2" }}>
    //   <img
    //     src="https://res.cloudinary.com/dgcy4qkiz/image/upload/v1662724933/payment_ve7qot.jpg"
    //     alt="user img"
    //     height="200px"
    //   />
    // </Grid>
    // <Grid container sx={{ display: "flex", justifyContent: "end" }}>
    //   <Grid item xs={12} md={6}>
    //     <Card>
    //       <CardContent>
    //         <Typography variant="h6" sx={{ py: 2 }}>
    //           <strong>
    //             {" "}
    //             Order total = &#8377; {finalTotal ? finalTotal : null}{" "}
    //           </strong>
    //         </Typography>

    //         <Box component="div">
    //           <form action="" onSubmit={submitHandler}>
    //             <Box component="div">
    //               <Typography sx={{ pt: 1, pb: 2 }}>Address</Typography>
    //               <TextField
    //                 color="secondary"
    //                 variant="outlined"
    //                 name="address"
    //                 id="address"
    //                 rows={5}
    //                 fullWidth
    //                 required
    //                 onChange={readValue}
    //                 label="address"
    //                 multiline
    //               />
    //             </Box>
    //             <Grid>
    //               <FormControl sx={{ display: "flex" }}>
    //                 <FormLabel
    //                   sx={{ pt: 2 }}
    //                   id="demo-row-radio-buttons-group-label"
    //                 >
    //                   Payment mode
    //                 </FormLabel>
    //                 <RadioGroup
    //                   column
    //                   aria-labelledby="demo-row-radio-buttons-group-label"
    //                   name="row-radio-buttons-group"
    //                 >
    //                   <FormControlLabel
    //                     type="radio"
    //                     name="paymentMode"
    //                     id="paymentMode"
    //                     checked={data.paymentMode === "cod"}
    //                     onChange={readValue}
    //                     value="cod"
    //                     control={<Radio color="secondary" />}
    //                     label="Pay on delivery"
    //                   />{" "}
    //                   <p>Pay using cash, debit, credit card, UPI</p>
    //                   <FormControlLabel
    //                     type="radio"
    //                     name="paymentMode"
    //                     id="paymentMode"
    //                     checked={data.paymentMode === "card"}
    //                     value="card"
    //                     onChange={readValue}
    //                     control={<Radio color="secondary" />}
    //                     label="Pay using card"
    //                   />
    //                   <img
    //                     src="https://res.cloudinary.com/dgcy4qkiz/image/upload/v1662707797/upi_lcix9e.jpg"
    //                     height="60px"
    //                     width="100%"
    //                     alt=""
    //                   />
    //                 </RadioGroup>
    //               </FormControl>
    //             </Grid>

    //             {/* <Divider color="black" sx={{ my: 3 }} /> */}
    //             <Button
    //               variant="contained"
    //               type="submit"
    //               onClick={submitHandler}
    //               sx={{ my: 3 }}
    //             >
    //               Place order
    //             </Button>
    //             <div
    //               style={{ display: "flex", justifyContent: "center" }}
    //             ></div>
    //           </form>
    //         </Box>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // </Grid>
    //   </Container>
    // </Container>

    <Container
      sx={{
        marginTop: "110px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Grid
        sx={{
          marginTop: "",
          height: "500px",
          width: "",
          // backgroundColor: "#d6baa2",
          display: "flex",
          justifyContent: "flex-start",
          // border: "2px solid #d6baa2"
        }}
      >
        <img
          src="https://res.cloudinary.com/dgcy4qkiz/image/upload/v1662724933/payment_ve7qot.jpg"
          alt="user img"
          height=""
        />
      </Grid>

      <Grid container sx={{ display: "flex", justifyContent: "end" }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="center" sx={{ py: 2 }}>
                {" "}
                Order total &#8377; {finalTotal ? finalTotal : null}{" "}
              </Typography>

              <Box component="div">
                <form action="" onSubmit={submitHandler}>
                  <Box component="div">
                    {/* <Typography sx={{ pt: 1, pb: 2 }}>Enter address</Typography> */}
                    <TextField
                      color="secondary"
                      variant="outlined"
                      name="address"
                      id="address"
                      rows={5}
                      fullWidth
                      required
                      onChange={readValue}
                      label="Enter your address"
                      multiline
                    />
                  </Box>
                  <Grid>
                    <FormControl sx={{ display: "flex" }}>
                      <FormLabel
                        sx={{ pt: 2 }}
                        id="demo-row-radio-buttons-group-label"
                      >
                        Payment mode
                      </FormLabel>
                      <RadioGroup
                        column
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          type="radio"
                          name="paymentMode"
                          id="paymentMode"
                          checked={data.paymentMode === "cod"}
                          onChange={readValue}
                          value="cod"
                          control={<Radio color="secondary" />}
                          label="Pay on delivery"
                        />{" "}
                        <p>Pay using cash, debit, credit card, UPI</p>
                        <FormControlLabel
                          type="radio"
                          name="paymentMode"
                          id="paymentMode"
                          checked={data.paymentMode === "card"}
                          value="card"
                          onChange={readValue}
                          control={<Radio color="secondary" />}
                          label="Pay using card"
                        />
                        <img
                          src="https://res.cloudinary.com/dgcy4qkiz/image/upload/v1662707797/upi_lcix9e.jpg"
                          height="60px"
                          width="100%"
                          alt=""
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  {/* <Divider color="black" sx={{ my: 3 }} /> */}

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={submitHandler}
                      sx={{ my: 3 }}
                      className="ordrbtn"
                    >
                      Place order
                    </Button>
                  </div>
                </form>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Checkout;
