function GenreFilter() {
    return (
      <select className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-amber-400">
        <option>All Genres</option>
        <option>Action</option>
        <option>Adventure</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
        <option>Sci-Fi</option>
      </select>
    );
  }
  
  export default GenreFilter;