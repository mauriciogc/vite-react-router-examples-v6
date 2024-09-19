import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './Components/Main';
import About from './Components/About';
import Products from './Components/Products';
import AppLayout from './Components/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/about/:name',
        element: <About />,
      },
      {
        path: '/products/:print',
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
