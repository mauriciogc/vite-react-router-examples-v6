import React from 'react';
import { useParams } from 'react-router-dom';

const ClotheStyle = () => {
  const { clotheStyle } = useParams(); // Obtenemos el parámetro dinámico 'category' de la URL

  return (
    <div>
      <h2>{clotheStyle}</h2>
    </div>
  );
};

export default ClotheStyle;
