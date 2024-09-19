import React from 'react';
import { useParams, Link, Outlet, redirect } from 'react-router-dom';

const Clothes = () => {
  const { type } = useParams();

  if (!['mens', 'ladies'].includes(type)) {
    return redirect('/'); // Redirige a la página de error
  }

  const title = type === 'mens' ? "Men's Clothing" : "Ladies' Clothing";

  return (
    <div>
      <h1>{title}</h1>

      {/* Lista de categorías */}
      <ul>
        <li>
          <Link to={`outerwear`}>Outerwear</Link>
        </li>
        <li>
          <Link to={`t-shirts`}>T-shirts</Link>
        </li>
        <li>
          <Link to={`layouts`}>Layouts</Link>
        </li>
      </ul>

      {/* Aquí se renderizan las subrutas */}
      <Outlet />
    </div>
  );
};

export default Clothes;
