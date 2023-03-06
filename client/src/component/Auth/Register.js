import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const navigate = useNavigate();

  const readValue = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`/api/v1/auth/register`, user)
        .then((res) => {
          toast.success("User registerted successfully");
          navigate("/");
        })
        .catch((err) => toast.error(err.response.data.msg));
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  return (
    <Container>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid
          item
          lg={4}
          xs={12}
          sx={{
            paddingTop: 0,

            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Card sx={{ padding: "20px" }}>
            <Typography variant="h5">Register</Typography>
            <Box component={"form"} onSubmit={submitHandler}>
              <TextField
                label="Name*"
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={readValue}
                variant="standard"
                sx={{ mt: 3, width: "100%" }}
              />
              <TextField
                label="Email*"
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={readValue}
                variant="standard"
                sx={{ mt: 3, width: "100%" }}
              />
              <TextField
                label="Mobile Number*"
                type="number"
                name="mobile"
                id="mobile"
                value={user.mobile}
                onChange={readValue}
                variant="standard"
                sx={{ mt: 3, width: "100%" }}
              />
              <TextField
                label="Password*"
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={readValue}
                variant="standard"
                sx={{ mt: 3, width: "100%" }}
              />
              <Button
                variant="contained"
                type="submit"
                style={{
                  marginTop: "38px",
                  width: "100%",
                  backgroundColor: "#ff0000",
                  padding: "10px 0px",
                  borderRadius: "60px",
                }}
                className="registerbtn"
              >
                Register
              </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Typography color={"#5c3d2f"}>Already a user ?</Typography>
              <NavLink
                to={`/login`}
                style={{
                  marginLeft: "10px",
                  textDecoration: "none",
                  color: "#739518",
                }}
                className="LoginLink"
              >
                LogIn
              </NavLink>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
