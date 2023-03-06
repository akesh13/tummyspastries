import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { NavLink } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

function AdminDashboard() {
  const data = useContext(GlobalContext);
  const [products] = data.productApi.products;

  return (
    <Container
      sx={{
        margin: "125px",
        backgroundColor: "#ffe8e8",
        padding: "100px",
        border: "3px solid #5c3d2f",
        borderRadius: "20px",
      }}
    >
      <Typography variant="h4" align="center" sx={{ marginTop: 0 }}>
        Admin Dashboard
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center", mt: 1 }}
      >
        <Grid item lg={4} align="center">
          <Card
            sx={{
              padding: "40px",
              backgroundColor: "#9ad6f9",
              borderRadius: "20px",
            }}
          >
            <CardHeader title="Total Products" />
            <CardContent>
              <Typography variant="h3">{products.length}</Typography>
            </CardContent>
            <CardActions sx={{ display: "felx", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#5c3d2f",
                  ":hover": { backgroundColor: "#9aff28" },
                }}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={`/product/create`}
                >
                  Add Product
                </NavLink>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminDashboard;
