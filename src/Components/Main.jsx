import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleAbout = () => navigate('/about');
  const handleBack = () => navigate(-1);
  const handleForward = () => navigate(1);
  const handleProductsWithUrlParams = () => navigate('/products?print=20');

  //Agregamos la acción del nuevo botón para mandar parametros por la URL
  const handleAboutWithState = () =>
    navigate('/about', { state: { name: 'Mauricio' } });

  return (
    <div>
      <h1>Hello, I'm Main component </h1>
      <hr />
      <h2>useNavigate</h2>
      <button onClick={handleAbout}>Go to "About"</button>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleForward}>Forward</button>
      <button onClick={handleProductsWithUrlParams}>
        Goes to "Products" with the query params "print=20".
      </button>

      {/* Agregamos el botón*/}
      <button onClick={handleAboutWithState}>
        Go to "About" with a state called name
      </button>
      <hr />
    </div>
  );
};

export default Main;
