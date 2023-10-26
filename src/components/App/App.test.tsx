import App from "./App";
import { screen, render } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When it receives a Sloth Page name", () => {
    test("Then it should show the text on a heading", () => {
      const expectedText = "Sloth Webpage";

      render(<App />);

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
