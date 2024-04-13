import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import HomePage from "./components/HomePage";
import MoviesPage from "./components/MoviesPage";
import MoviesPageDetail from "./components/MoviesPageDetail";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:moviesId" element={<MoviesPageDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
