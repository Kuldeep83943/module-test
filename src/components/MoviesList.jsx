import React from "react";

function MoviesList({ movies }) {
  return (
    <>
      <h2 className="m-2 text-center">List of movies</h2>
      <div className="container w-75">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="px-4 py-2 table-bordered">{movie.title}</td>
                <td className="px-4 py-2 table-bordered">{movie.genre}</td>
                <td className="px-4 py-2 table-bordered">{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MoviesList;
