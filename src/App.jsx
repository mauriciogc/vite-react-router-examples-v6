import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './Components/Nav';
import Main from './Components/Main';
import About from './Components/About';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element=<Main /> />
          <Route path="/about" element=<About /> />
          <Route path="/products" element=<Products /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
