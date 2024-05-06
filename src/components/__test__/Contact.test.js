import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact", () => {
  // beforeAll(() => {
  //   console.log("before all test cases");
  // });

  // beforeEach(() => {
  //   console.log("before each test case");
  // });

  // afterEach(() => {
  //   console.log("after each test case");
  // });

  // afterAll(() => {
  //   console.log("after all the test cases");
  // });

  describe("heading", () => {
    it("should load contact component", () => {
      render(<Contact />);
      //Querying
      const heading = screen.getByRole("heading");
      //Assertion
      expect(heading).toBeInTheDocument();
    });
  });

  describe("buttons", () => {
    test("should load button inside contact component", () => {
      render(<Contact />);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });

  describe("input boxes", () => {
    it("should load input inside contact component", () => {
      render(<Contact />);
      const inputName = screen.getByPlaceholderText("name");
      expect(inputName).toBeInTheDocument();
    });

    test("should load 2 input boxes", () => {
      render(<Contact />);
      const inputBoxes = screen.getAllByRole("textbox");
      expect(inputBoxes.length).toBe(2);
    });
  });
});
