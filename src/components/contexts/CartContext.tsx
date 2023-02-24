// import React, { createContext, useState } from "react";

// export type CartContextType = {
//   products: {
//     name: string;
//     amount: number;
//     price: number;
//   }[];,
//   setProducts: React.Dispatch<React.SetStateAction<CartContextType>>;

// };

// export const CartContext = createContext<CartContextType>({
//   products: [],
//   setProducts: React.Dispatch<React.SetStateAction<CartContextType>>;
// });

// export const CartContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [products, setProducts] = useState<>({ products: [] });

//   return (
//     <CartContext.Provider value={products}>{children}</CartContext.Provider>
//   );
// };

import React, { useState, createContext, useContext, ReactNode } from "react";
export type Product = {
  id: number;
  amount: number;
  name: string;
  price: number;
  currency: string;
  productIcon: string;
};
export type CartContextType = {
  products: {
    id: number;
    name: string;
    amount: number;
    price: number;
    currency: string;
    productIcon: string;
  }[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const CartContext = createContext<CartContextType>({
  products: [],
  setProducts: () => {},
});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
