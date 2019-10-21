import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import { BrowserRouter,Route,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h2>Hello World!</h2> */}
      {/* navbar
          categories
          search
          sign in
          cart */}
        <BrowserRouter>
          <Navbar />
          <Route Link to='/' component={Home} />
          <Route Link to='/cart' component={Cart} />
        </BrowserRouter>
    </div>
  );
}

export default App;
