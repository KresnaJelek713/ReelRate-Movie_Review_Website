function MovieTable() {
    const movies = [
      {
        id: 1,
        title: "The Batman",
        genre: "Action",
        rating: 4.8,
      },
      {
        id: 2,
        title: "Inception",
        genre: "Sci-Fi",
        rating: 4.9,
      },
      {
        id: 3,
        title: "Interstellar",
        genre: "Adventure",
        rating: 4.7,
      },
    ];
  
    return (
      <div className="overflow-hidden rounded-xl bg-slate-900">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Genre</th>
              <th className="p-4 text-left">Rating</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
  
          <tbody>
            {movies.map((movie) => (
              <tr
                key={movie.id}
                className="border-t border-slate-700 hover:bg-slate-800"
              >
                <td className="p-4">{movie.title}</td>
  
                <td className="p-4">{movie.genre}</td>
  
                <td className="p-4 text-amber-400">
                  ⭐ {movie.rating}
                </td>
  
                <td className="p-4 text-center">
                  <button className="mr-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-400">
                    Edit
                  </button>
  
                  <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-400">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default MovieTable;