const { act, render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenuDataApi.json";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load the restaurant menu component and check if the cart header's number is updating correctly after hitting the (ADD +) button and finally check if those many items are present in the cart page and also test clear cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionTitle = screen.getByText("Boba Tea (Brewed by Boba Bhai) (8)");

  fireEvent.click(accordionTitle);

  expect(screen.getAllByTestId("itemssss").length).toBe(8);

  expect(screen.getByText("Cart (0)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("itemssss").length).toBe(10); //10 because it also includes the initial 8 because they share the same testid because we reused the itemlist component for our cart component

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("itemssss").length).toBe(8);

  expect(screen.getByText("Cart is Empty., Add Items"));
});
