import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("test in <GifItem />", () => {
  const title = "Meme";
  const url = "https://gif-search.com/algo.jpg";

  test("should match snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("It must show the image with the URL and ALT indicated", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();

    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("must show the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
