import { GifItem } from './GifItem';
import { useFetchGifts } from '../hooks/useFetchGifts';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }


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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

GifGrid.defaultProps = {
  category: 'Dragon Ball Z',
};
