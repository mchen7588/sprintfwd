import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import ToDoContextProvider from './components/ToDoContextProvider'
import Home from './pages/Home'
import Members from './pages/Members'
import Teams from './pages/Teams'
import ToDo from './pages/ToDo'
import Team from './pages/Team'

function App() {
  return (
    <ToDoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/team/:id" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </ToDoContextProvider>
  );
}

export default App;
