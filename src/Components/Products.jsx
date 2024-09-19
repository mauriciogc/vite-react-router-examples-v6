import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { print } = useParams(); //Obtenemos la propiedad "print"

  return (
    <div>
      <h1>Hello, I'm Products component</h1>
      <h3>Images to display:{print} </h3>
      <div>
        {new Array(Number(print)).fill().map((v, i) => (
          <img
            src={'https://picsum.photos/id/1' + i + '/200/200'}
            alt={'img' + i}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
