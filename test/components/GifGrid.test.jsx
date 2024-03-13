import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Le  estoy diciendo que haga un mock completo de este path
jest.mock("../../src/hooks/useFetchGifs");

describe("Test in <GifGrid>", () => {
  const category = "One Punch";

  test("You should show the loading initially", () => {
    // Simulo lo que va a retornar esta funcion
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Should show items when images are loaded useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://gif-search.com/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://gif-search.com/goku.jpg",
      },
    ];

    // Simulo lo que va a retornar esta funcion
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
