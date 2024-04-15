import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
   "h2",
   {id:"heading"},
   "Hello World using React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);