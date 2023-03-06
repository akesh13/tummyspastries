import React from "react";
import {
  Modal,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

function CartList(props) {
  //   const { image, title, price, quantity,name } = props;
  return (
    <React.Fragment>
      <Modal
        open={props.open}
        onClick={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        name={props.cart.name}
      >
        <Box
          sx={{
            height: "100vh",
          }}
        >
          <Box sx={{ padding: "30px " }}>
            <Box onClick={props.handleClose}>
              <CloseIcon
                sx={{
                  position: "absolute",
                  top: "2.5%",
                  right: "2%",
                  zIndex: 20,
                  fontSize: "40px",
                  color: "white",
                }}
              />
            </Box>
            <Box sx={{ borderRadius: "0px" }}>
              <Grid
                container
                spacing={3}
                height="100vh"
                alignItems={"center"}
                justifyContent="center"
              >
                {props.cart.map((item, index) => {
                  const { image, title, price, quantity } = item;
                  return (
                    <Grid key={index} item lg={3}>
                      <Card>
                        <CardMedia
                          component={"img"}
                          image={image.url}
                          height="250px"
                        />
                        <CardContent>
                          <Typography>{title}</Typography>
                          <Typography>&#8377;{price}</Typography>
                          <Typography>Quantity = {quantity}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default CartList;

{
  /* <Box
            sx={{
              height: "100vh",
            }}
          >
            <Box sx={{ padding: "30px " }}>
              <Box onClick={props.handleClose}>
                <CloseIcon
                  sx={{
                    position: "absolute",
                    top: "2.5%",
                    right: "2%",
                    zIndex: 20,
                    fontSize: "40px",
                    color: "white",
                  }}
                />
              </Box>
              <Box sx={{ borderRadius: "0px" }}>
                <Grid
                  container
                  spacing={3}
                  height="100vh"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  {props.cart.map((item, index) => {
                    const { image, title, price, quantity } = item;
                    return (
                      <Grid key={index} item lg={3}>
                        <Card>
                          <CardMedia
                            component={"img"}
                            image={image.url}
                            height="250px"
                          />
                          <CardContent>
                            <Typography>{title}</Typography>
                            <Typography>&#8377;{price}</Typography>
                            <Typography>Quantity = {quantity}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Box> */
}