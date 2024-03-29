import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifSearchApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Search App</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
