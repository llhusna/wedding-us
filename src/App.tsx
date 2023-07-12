import React from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom'
import { Home } from './page/Home';


function App() {
 
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
