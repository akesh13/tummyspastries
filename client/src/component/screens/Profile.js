import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Box,
} from "@mui/material";

function Profile() {
  const data = useContext(GlobalContext);
  const [user] = data.authApi.userData;
  const [isUser] = data.authApi.isUser;

  return (
    <Container sx={{ paddingTop: "80px" }}>
      <Typography variant="h4" align="center" sx={{ marginTop: 6 }}>
        Profile Info
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item lg={4}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffdce8",
              borderRadius: "50%",
              boxShadow: "none",
              border: "3px solid #5c3d2f",
            }}
          >
            <CardContent>
              <img
                src="https://res.cloudinary.com/dgcy4qkiz/image/upload/v1661405520/userimg_oiwdn6.jpg"
                alt="user img"
                height="300px"
                width="500px"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={8}>
          <Card>
            <CardHeader align="center" title={user.name} />
            <CardContent>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Typography variant="h6">Email</Typography>
                <Typography>{user.email}</Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Typography variant="h6">Mobile</Typography>
                <Typography>{user.mobile}</Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Typography variant="h6">Role</Typography>
                <Typography>{user.role}</Typography>
              </Box>
              {isUser ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography variant="h6">Orders</Typography>
                  <Typography>{user.orders}orders</Typography>
                </Box>
              ) : null}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
