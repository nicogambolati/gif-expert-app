import { useState } from 'react';

// export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  /**
   ** Siempre estoy recibiendo el event,despues lo Desestructuramos
   **/
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    /**
     ** Chequea que haya mas de un  caracter
     **/
    if (inputValue.trim().length <= 1) return;
    console.log(inputValue);

    /**
     ** Todas las categorias en el estado actual,
     ** insertamos el nuevo inputValue seguido de la desestructuracion de las categorias anteriores
     **/
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="test"
        placeholder="Buscar gifs"
        onChange={onInputChange}
        // value={inputValue}
        //   onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
