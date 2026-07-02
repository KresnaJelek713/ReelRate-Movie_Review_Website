import { useState } from "react";

import SearchBar from "../components/SearchBar";
import MovieTable from "../components/MovieTable";
import MovieForm from "../components/MovieForm";
import GenreFilter from "../components/GenreFilter";
import SortMovie from "../components/SortMovie";

function Movies() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">🎬 Movies</h1>

          <p className="mt-2 text-slate-400">
            Manage your movie collection.
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="rounded-lg bg-amber-500 px-5 py-3 font-semibold text-slate-900 hover:bg-amber-400"
        >
          + Add Movie
        </button>
      </div>

      {/* Search & Filter */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <SearchBar />
        </div>

        <GenreFilter />

        <SortMovie />
      </div>

      {/* Table */}
      <MovieTable />

      {/* Modal */}
      {showForm && (
        <MovieForm onClose={() => setShowForm(false)} />
      )}
    </>
  );
}

export default Movies;