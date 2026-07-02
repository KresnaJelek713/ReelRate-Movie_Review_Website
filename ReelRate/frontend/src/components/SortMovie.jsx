function SortMovie() {
    return (
      <select className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-amber-400">
        <option>Newest</option>
        <option>Oldest</option>
        <option>Highest Rating</option>
        <option>Lowest Rating</option>
      </select>
    );
  }
  
  export default SortMovie;