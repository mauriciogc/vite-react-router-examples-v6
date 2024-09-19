import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import Clothes from './Components/Clothes';
import ClotheStyle from './Components/ClotheStyle';

// Importamos la página de error 404
import NotFound from './Components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/:type',
        element: <Clothes />,
        errorElement: <NotFound />, // Redirige a la página de error 404
        children: [
          {
            path: ':clotheStyle',
            element: <ClotheStyle />,
            errorElement: <NotFound />, // Redirige a la página de error 404
          },
        ],
      },
    ],
  },
  {
    path: '*', // Ruta comodín para cualquier ruta no encontrada
    element: <NotFound />, // Redirige a la página de error 404
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
