import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Components/AppLayout';
import Clothes from './Components/Clothes';
import ClotheStyle from './Components/ClotheStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/:type',
        element: <Clothes />,
        children: [
          {
            path: ':clotheStyle', // Subruta dinámica para categorías como 'outerwear' o 't-shirts'
            element: <ClotheStyle />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
