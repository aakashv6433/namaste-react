import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Log In");

  const internetStatus = useInternetStatus();

  useEffect(() => {}, [btnName]);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-violet-500 shadow-lg m-2">
      <div className="logo-container">
        <a href="http://localhost:1234/">
          <img className="w-24" src={LOGO_URL} />
        </a>
      </div>
      <div className="flex items-center">
        <ul className="flex m-5">
          <li className="px-5 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5 text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5 text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-5 text-white">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="px-5 text-white"
            onClick={() => {
              btnName === "Log In"
                ? setBtnName("Log Out")
                : setBtnName("Log In");
            }}
          >
            {btnName}
          </button>
          <li className="px-5">{internetStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
