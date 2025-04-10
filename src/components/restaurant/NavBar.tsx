import { CartState } from "../../types/restaurant/types";
import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
    const cartItems = useSelector((state: CartState) => state.items)

  return <div className="bg-gray-800 text-white p-4">NavBar</div>;
}


export default NavBar;