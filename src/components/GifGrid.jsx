import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";

import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages()
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image) => {
           {/* return <GifItem key={image.id} title={image.title} url={image.url}/> */}
           return <GifItem key={image.id} 
            /*Esparcimos todas las props que vienen dentro de image*/ 
            {...image}
            />
        })}
      </div>
    </>
  );
};
