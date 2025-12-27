import React, { createContext, useEffect, useState } from "react";
import { productsData } from "../../assets/data";
import kidsData from "../../assets/kids/data1";
import mensData from "../../assets/mens/data2";
import womensData from "../../assets/womens/data3"; // <-- Added womens data
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // Merge regular products + kids + mens + womens
  const [products] = useState([
    ...productsData,
    ...kidsData,
    ...mensData,
    ...womensData, // <-- added here
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Total quantity of items in cart
  const quantity = cart.reduce((acc, item) => acc + item.amount, 0);

  // Calculate total price whenever cart changes
  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.amount,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  // Add product to cart
  const addToCart = (product) => {
    const itemExists = cart.find((item) => item.id === product.id);

    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
      toast.success("Product added to cart");
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.success("Product removed successfully");
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    toast.success("Cart emptied");
  };

  // Increase quantity of a cart item
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  // Decrease quantity of a cart item
  const decreaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;

    if (item.amount === 1) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        quantity,
        total,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
