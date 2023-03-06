import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { GlobalContext } from "../../GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";
import Product from "../Product/Product";
import { Grid } from "@mui/material";

function MenuName() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = useContext(GlobalContext);
  const [products, setProducts] = data.productApi.products;
  const [isUser] = data.authApi.isUser;
  const [isAdmin] = data.authApi.isAdmin;

  const [token] = data.token;

  const delHandler = async (id) => {
    if (window.confirm(`Are you sure to delete product?`)) {
      try {
        let product = await axios.get(`/api/v1/product/get/${id}`);
        if (!product) {
          toast.error("no product found");
        } else {
          // delete image
          axios.post(
            `/api/v1/image/product/destroy`,
            { public_id: product.public_id },
            {
              headers: { Authorization: token },
            }
          );
          await axios
            .delete(`/api/v1/product/delete/${id}`, {
              headers: { Authorization: token },
            })
            .then((res) => {
              toast.success("Product deleted succssfully");
              window.location.reload();
            })
            .catch((err) => toast.error(err.message));
        }
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      toast.warning("delete terminated");
    }
  };

  return (
    <Box pt={8} pb={5}>
      <Box className="lineContainer">
        <Typography
          align="center"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "1000",
            color: "#3b251a",
            fontFamily: "Arial",
          }}
          className="line"
        >
          Indulge in Sweet Truth’s delicious brownies, cheesecakes and more.
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {products &&
          products.map((item, index) => {
            return (
              <Product
                key={index}
                {...item}
                isUser={isUser}
                isAdmin={isAdmin}
                del={delHandler}
              />
            );
          })}
      </Grid>
    </Box>
  );
}

export default MenuName;
