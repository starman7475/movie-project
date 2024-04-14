import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
// import HomePage from "./components/HomePage";
// import MoviesPage from "./components/MoviesPage";
// import MoviesPageDetail from "./components/MoviesPageDetail";
// import Cast from "./components/Cast";
// import Reviews from "./components/Reviews";

const MoviesPage = lazy(() => import("./components/MoviesPage"));
const MoviesPageDetail = lazy(() => import("./components/MoviesPageDetail"));
const Cast = lazy(() => import("./components/Cast"));
const Reviews = lazy(() => import("./components/Reviews"));
const HomePage = lazy(() => import("./components/HomePage"));

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
