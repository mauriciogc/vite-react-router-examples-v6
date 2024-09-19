import React from 'react';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  //Si no encuentra print por default serán 5
  const print = queryParams.get('print') || 5;

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
