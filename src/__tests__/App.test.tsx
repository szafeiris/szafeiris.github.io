import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";

test("Renders the main page", () => {
    jest.disableAutomock();
    render(<App />);
    expect(true).toBeTruthy();
});
