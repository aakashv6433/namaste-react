import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="title">Namaste React using JSX</h1>;

const number = 999999999;

//all the 3 ways used below are valid (we're talking about how Title is being put inside)
const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h2>Namaste React Functional Component</h2>
    <h3>{number * number}</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
