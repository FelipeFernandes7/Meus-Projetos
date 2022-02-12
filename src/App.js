import React from 'react';
import { BrowserRouter, Route,Routes} from "react-router-dom";
import { Mural } from './pages/Mural';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/Mural" element={<Mural/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;