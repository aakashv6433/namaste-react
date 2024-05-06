import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "Log In" });
  expect(logInButton).toBeInTheDocument();
});

it("should render header component with cart items as 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItemsZero = screen.getByText("Cart (0)");
  expect(cartItemsZero).toBeInTheDocument();
});

it("should change Log In button to Log Out on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const logInButton = screen.getByRole("button", { name: "Log In" });
  fireEvent.click(logInButton);
  const logOutButton = screen.getByRole("button", { name: "Log Out" });
  expect(logOutButton).toBeInTheDocument();
});
