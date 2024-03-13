import { render, screen } from "@testing-library/react";
import { GifSearchApp } from "../src/GifSearchApp";

describe("Test in <GifSearchApp />", () => {
  test("should match snapshot", () => {
    const { container } = render(<GifSearchApp />);
    expect(container).toMatchSnapshot();
    // screen.debug();
  });
});
