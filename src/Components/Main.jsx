import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleAbout = () => navigate('/about');
  const handleBack = () => navigate(-1);
  const handleForward = () => navigate(1);
  const handleAboutWithState = () =>
    navigate('/about', { state: { name: 'Mauricio' } });

  //Actualizamos la url de query params a parametro dentro de la URL
  const handleProductsWithUrlParams = () => navigate('/products/20');

  return (
    <div>
      <h1>Hello, I'm Main component </h1>
      <hr />
      <h2>useNavigate</h2>
      <button onClick={handleAbout}>Go to "About"</button>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleForward}>Forward</button>
      <button onClick={handleAboutWithState}>
        Go to "About" with a state called name
      </button>

      {/* Actualizamos el botón*/}
      <button onClick={handleProductsWithUrlParams}>
        Goes to "Products" with URL "products/20".
      </button>

      <hr />
    </div>
  );
};

export default Main;
