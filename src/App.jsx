import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import Clothes from './Components/Clothes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/:type', // Ruta dinámica que captura 'mens' o 'ladies'
        element: <Clothes />, // Componente que se renderiza para ambas rutas
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
