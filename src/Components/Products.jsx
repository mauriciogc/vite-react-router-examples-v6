import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Products = () => {
  const { print } = useParams();
  const { pathname } = useLocation();

  return (
    <div>
      <h1>Hello, I'm Products component</h1>
      <h3>Images to display:{print} </h3>
      <h4>Current URL: {pathname}</h4>
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
