import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

const AppLayout = () => (
  <div className="App">
    <Nav />
    <Outlet />
    <Footer />
  </div>
);

export default AppLayout;
