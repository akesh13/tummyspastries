import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function useAuth(token) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // card state
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [finalTotal, setFinalTotal] = useState(0);
  const [history, setHistory] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getData = async () => {
        const res = await axios.get(`/api/v1/auth/userinfo`, {
          headers: { Authorization: token },
        });
        console.log("token =", token);
        setUser(res.data.user);
        setCart(res.data.user.cart);
        setOrder(res.data.user.orders);
        setIsLogged(true);
        if (res.data.user.role === "superadmin") {
          setIsAdmin(true);
          // getAllUsersData(token); // changed
        }
        if (res.data.user.role === "user") {
          setIsUser(true);
        }
      };
      getData();
    }
  }, [token]);

  const addToCart = async (product) => {
    if (!isLogged) return toast.warning("Login to continue");
    const check = cart.every((item) => {
      return item._id !== product._id;
    });

    if (check) {
      toast.success("added to cart");
      setCart([...cart, { ...product, quantity: 1 }]);

      // store cart info info in db
      await axios.patch(
        `/api/v1/auth/addToCart`,
        { cart: [...cart, { ...product, quantity: 1 }] },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } else {
      toast.warning("Product already in cart");
    }
  };

  const orderUpdate = async (cart, finalTotal) => {
    toast.success("Your order is ready to check out");
    setOrder({ cart: cart, finalTotal: finalTotal });

    await axios.patch(
      `/api/v1/auth/saveOrder`,
      { orders: { cart, finalTotal } },
      {
        headers: { Authorization: token },
      }
    );
  };

  // const getAllUsersData = async (token) => {
  //   const res = await axios.get(`/api/v1/auth/allUsers`, {
  //     headers: { Authorization: token },
  //   });
  //   setAllUsers(res.data.user);
  // }; // added now

  return {
    userData: [user, setUser],
    isLogged: [isLogged, setIsLogged],
    isUser: [isUser, setIsUser],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    order: [order, setOrder],
    finalTotal: [finalTotal, setFinalTotal],
    addToCart: addToCart,
    orderUpdate: orderUpdate,
    callback: [callback, setCallback],
    // allUsers: [allUsers, setAllUsers], // added now
  };
}

export default useAuth;

/*
    mount = useEffect(() => {

    },[]);

    update = useEffect(() => {

    },[params]);

    unmount = useEffect(() => {
    return () => {}
    }, [])

*/
