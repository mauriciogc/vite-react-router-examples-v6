import React from 'react';
import { useParams } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

const Clothes = () => {
  const { type } = useParams();
  const title = type === 'mens' ? "Men's Clothing" : "Ladies' Clothing";

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Clothes;
