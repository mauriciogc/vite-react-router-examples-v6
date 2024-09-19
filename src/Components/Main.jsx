import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleAbout = () => navigate('/about'); //add programmatic routing
  const handleBack = () => navigate(-1); //Back programmatic routing
  const handleForward = () => navigate(1); //Forward programmatic routing

  return (
    <div>
      <h1>Hello, I'm Main component </h1>
      <hr />
      <h2>useNavigate</h2>
      <button onClick={handleAbout}>Go to "About"</button>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleForward}>Forward</button>
      <hr />
    </div>
  );
};

export default Main;
