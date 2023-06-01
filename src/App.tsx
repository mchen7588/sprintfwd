import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Members from './pages/Members'
import Teams from './pages/Teams'
import ToDo from './pages/ToDo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
