import React, { useState } from "react";

function GenreFilter({ onGenreChange }) {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreChange = (genre) => {
    console.log(`Filtering By ${genre}`);
    setSelectedGenre(genre);
    onGenreChange(genre);
  };

  const handleAllMovies = () => {
    setSelectedGenre(null);
    onGenreChange(null);
  };
  return (
    <div className="container w-75 p-4 " style={{backgroundColor:"#f2f2f2"}}>
      <h2 className="mb-4">Filter by Genre</h2>
      <div className="d-lg-flex justify-content-lg-between" >
      <button className="btn btn-light border" onClick={handleAllMovies}>
        All
      </button>
      <button className="btn btn-light border" onClick={() => handleGenreChange("Drama")}>
        Drama
      </button>
      <button className="btn btn-light border" onClick={() => handleGenreChange("Crime")}>
        Crime
      </button>
      <button className="btn btn-light border" onClick={() => handleGenreChange("Action")}>
        Action
      </button>
      <button className="btn btn-light border" onClick={() => handleGenreChange("Fantasy")}>
        Fantasy
      </button>
      <button className="btn btn-light border" onClick={() => handleGenreChange("Western")}>
        Western
      </button>
      <button className="btn btn-light border" onClick={() => handleGenreChange("Science Fiction")}>
        Science Fiction
      </button>
      <button className="btn btn-light border" onClick={() => handleGenreChange("Thriller")}>
        Thriller
      </button>
      <button className="btn btn-light border" onClick={() => handleGenreChange("War")}>
        War
      </button>
      <button className="btn btn-light border" onClick={() => handleGenreChange("Animation")}>
        Animation
      </button>
      </div>
    </div>
  );
}

export default GenreFilter;
