import React from 'react';
import { useParams, redirect } from 'react-router-dom';

const ClotheStyle = () => {
  const { clotheStyle } = useParams();

  if (!['outerwear', 't-shirts'].includes(clotheStyle)) {
    return redirect('/'); // Redirige a la página de error
  }

  return (
    <div>
      <h2>{clotheStyle}</h2>
    </div>
  );
};

export default ClotheStyle;
