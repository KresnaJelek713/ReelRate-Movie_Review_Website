function SearchBar() {
    return (
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search movie..."
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-amber-400"
        />
      </div>
    );
  }
  
  export default SearchBar;