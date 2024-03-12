import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);
  console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image) => {
          return (
            <GifItem
              key={image.id}
              /*Esparcimos todas las props que vienen dentro de image*/
              {...image}
            />
          );
        })}
      </div>
    </>
  );
};
