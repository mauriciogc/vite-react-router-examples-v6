import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Nav from './Components/Nav';
import Main from './Components/Main';
import About from './Components/About';
import Products from './Components/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="App">
        <Nav />
        <Outlet />
      </div>
    ),
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
        path: '/products',
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
