import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListDataFromApi.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should replicate/check the actual search function of restaurant cards", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearchClick = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearchClick.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(3); //the number is according to your mock data so dont confuse it with the live data
});
