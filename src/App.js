import React, { useState } from "react";
import MoviesList from "./components/MoviesList"
import GenreFilter from "./components/GenreFilter"
import data from "./data/data.js";

function App() {
  const [filteredGenre, setFilteredGenre] = useState(null);

  const handleGenreChange = (genre) => {
    setFilteredGenre(genre);
  };

  const filteredMovies = filteredGenre
    ? data.filter((movie) => movie.genre === filteredGenre)
    : data;

  return (
    <main className="mx-auto">
      <header>
        <h1 className="m-4 text-center">
          Top 15 Movies of All Time
        </h1>
      </header>
      <nav>
        <GenreFilter onGenreChange={handleGenreChange} />
      </nav>
      <section>
        <MoviesList movies={filteredMovies} />
      </section>
    </main>
  );
}

export default App;
