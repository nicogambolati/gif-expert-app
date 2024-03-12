import { getGifs } from "../../src/helpers/getGifs";

describe("test in getGifs()", () => {
  test("should return an Gifs array", async () => {
    const gifs = await getGifs("Meme");
    // console.log(gifs);

    expect(gifs.length).toBeGreaterThan(0); //greater than 0
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
