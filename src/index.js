import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Artists from './Components/Artists/Artists';
import Collections from './Components/Collections/Collections';
import Explore from './Components/Explore/Explore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/artists' element={<Artists/>}/>
      <Route path='/collections' element={<Collections/>}/>
      <Route path='/explore' element={<Explore/>}/>
    </Routes>
  </Router>
);


