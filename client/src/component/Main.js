import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

/* react toast */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* component */
import AdminDashboard from "./Admin/AdminDashboard";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import About from "./screens/About";
import Home from "./screens/Home";
import UserDashboard from "./User/UserDashboard";
import Pnf from "./Util/Pnf";
import ProtectedRoute from "../middleware/ProtectedRoute";
import Profile from "./screens/Profile";
import Order from "./screens/Order";
import ProductDetails from "./Product/ProductDetails";
import CreateProduct from "./Admin/CreateProduct";
import Menu_Item from "./screens/MenuItem";
import Appbar from "./screens/Appbar";

import Checkout from "./Product/Checkout";
import Cart from "./Product/Cart";

function Main(props) {
  const context = useContext(GlobalContext);

  const [isLogged, setIsLogged] = context.authApi.isLogged;
  const [isAdmin, setIsAdmin] = context.authApi.isAdmin;
  const [isUser, setIsUser] = context.authApi.isUser;

  return (
    <Router>
      <Appbar />
      <ToastContainer autoClose={3000} position="bottom-center" />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/menu`} element={<Menu_Item />} />
        <Route path={`/login`} element={isLogged ? <Pnf /> : <Login />} />
        <Route path={`/register`} element={isLogged ? <Pnf /> : <Register />} />
        <Route
          path={`/user/dashboard`}
          element={
            <ProtectedRoute auth={isLogged}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/admin/dashboard`}
          element={
            <ProtectedRoute auth={isLogged}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/profile`}
          element={
            <ProtectedRoute auth={isLogged}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/orders`}
          element={
            <ProtectedRoute auth={isLogged}>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/product/details/:id`}
          element={
            <ProtectedRoute auth={isLogged}>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/product/create`}
          element={
            <ProtectedRoute auth={isLogged}>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/product/cart`}
          element={
            <ProtectedRoute auth={isLogged}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/checkout/:final`}
          element={
            <ProtectedRoute auth={isLogged}>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
    </Router>
  );
}

export default Main;
