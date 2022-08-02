import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import { useEffect } from "react";
const theme = createTheme();
export default function AddProduct() {
  const [state, setState] = React.useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
  });

  const handlechange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };
  console.log(state);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://syoft-backend-db.herokuapp.com/product`, state)
      .then((res) => {
        console.log(res.data);
        alert("Product Added Successfully");
      })
      .catch((e) => {
        alert(" Failed ");
      });
    
  };

 
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          border: "1px solid black",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            sx={{
              border: "1px solid black",

              padding: "8px",
              marginBottom: "10px",
            }}
          >
            Add Product
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={0.8}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Product Name"
                  name="name"
                  autoComplete="name"
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="quantity"
                  label="Quantity"
                  type="quantity"
                  id="quantity"
                  autoComplete="quantity"
                  onChange={handlechange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#ffd84d ", color: "black" }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
