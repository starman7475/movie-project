import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import MoviesPage from './components/MoviesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path='/movies' element={<MoviesPage/>}/>
    </Routes>
  )
}

export default App;
