import axios from "axios";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { GlobalContext } from "../../GlobalContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const LoadingSpinner = () => {
  return (
    <div
      className="spinner-border text-success"
      style={{ width: "3em", height: "3em" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

function CreateProduct() {
  //context
  const data = useContext(GlobalContext);
  const [categories] = data.categoryApi.categories;
  const [token] = data.token;

  // ref to navigate
  const navigate = useNavigate();

  //state
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: 0,
    qnty: "",
    desc: "",
    stock: 0,
  });

  // image upload handler
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      // to read file content from input
      const file = e.target.files[0];
      if (!file) return toast.error("file not exists..");
      // file size
      if (file.size > 1 * 1024 * 1024)
        return toast.error("file size is too large");
      // ref formData
      let formData = new FormData();
      formData.append("productImg", file);

      setLoading(true);
      // upload logic
      const res = await axios.post(`/api/v1/image/product/upload`, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      // after upload
      setLoading(false);
      setImage(res.data);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  // image delete handler
  const handleDestroy = async (e) => {
    try {
      if (window.confirm(`Are you sure to delete image?`)) {
        setLoading(true);
        await axios.post(
          `/api/v1/image/product/destroy`,
          { public_id: image.public_id },
          {
            headers: { Authorization: token },
          }
        );

        setImage(false);
        setLoading(false);
      } else {
        toast.warning("delete terminated");
      }
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  const readValue = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!image) return toast.error("Image doesn't exists.");

    const res = await axios.post(
      `/api/v1/product/create`,
      { ...product, image },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setImage(false);
    toast.success("Product created succesfully");
    navigate("/");
  };

  return (
    <Container sx={{ paddingTop: "80px" }}>
      <Typography variant="h4" align="center" sx={{ paddingTop: 3 }}>
        Add New Product
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardContent>
              <input
                variant="filled"
                type="file"
                name="productImg"
                onChange={handleUpload}
                required
                style={{
                  border: "2px solid #726f6f",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              />
            </CardContent>
            <CardActions>
              {loading ? (
                <Box>
                  <LoadingSpinner />
                </Box>
              ) : (
                <Box>
                  <img src={image ? image.url : ""} width={"100%"} alt="" />
                  <Box onClick={handleDestroy}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#f4474a",
                        ":hover": { backgroundColor: "#f4474a" },
                      }}
                      endIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              )}
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={8} xs={12}>
          <Card>
            <CardContent>
              <Box component={"form"} onSubmit={submitHandler}>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="text"
                  name="title"
                  id="title"
                  value={product.title}
                  onChange={readValue}
                  required
                  label="Title"
                />
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Category*
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="category"
                    name="category"
                    value={product.category}
                    label="Category"
                    onChange={readValue}
                  >
                    {categories &&
                      categories.map((item, index) => {
                        return (
                          <MenuItem key={index} value={item.title}>
                            {item.title}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="number"
                  name="price"
                  id="price"
                  value={product.price}
                  onChange={readValue}
                  required
                  label="Price"
                  sx={{ marginTop: 2 }}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  type="text"
                  name="desc"
                  id="desc"
                  value={product.desc}
                  onChange={readValue}
                  required
                  label="Dish"
                  sx={{ marginTop: 2 }}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  type="text"
                  name="qnty"
                  id="qnty"
                  value={product.qnty}
                  onChange={readValue}
                  required
                  label="Quantity"
                  sx={{ marginTop: 2 }}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  type="number"
                  name="stock"
                  id="stock"
                  value={product.stock}
                  onChange={readValue}
                  required
                  label="Stock"
                  sx={{ marginTop: 2 }}
                />
                <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
                  Create
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CreateProduct;
