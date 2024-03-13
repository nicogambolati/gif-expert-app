import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  // Estoy recibiendo el event, despues lo Desestructuro
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Chequea que haya mas de un  caracter
    if (inputValue.trim().length <= 1) return;

    // Todas las categorias en el estado actual,
    // e inserto el nuevo inputValue seguido de la desestructuracion de las categorias anteriores

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="test"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        // Es lo mismo que: onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};

AddCategory.prototypes = {
  onNewCategory: PropTypes.func.isRequired,
};