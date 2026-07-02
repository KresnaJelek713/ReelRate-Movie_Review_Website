function MovieForm({ onClose }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/60">
  
        <div className="w-full max-w-lg rounded-xl bg-slate-900 p-8">
  
          <h2 className="mb-6 text-2xl font-bold">
            Add New Movie
          </h2>
  
          <div className="space-y-4">
  
            <input
              type="text"
              placeholder="Movie Title"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-amber-400"
            />
  
            <input
              type="text"
              placeholder="Genre"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-amber-400"
            />
  
            <input
              type="text"
              placeholder="Director"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-amber-400"
            />
  
            <input
              type="number"
              placeholder="Release Year"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-amber-400"
            />
  
            <input
              type="number"
              placeholder="Duration (minutes)"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-amber-400"
            />
  
            <input
              type="number"
              placeholder="Rating"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-amber-400"
            />
  
            <textarea
              rows="4"
              placeholder="Synopsis"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-amber-400"
            ></textarea>
  
          </div>
  
          <div className="mt-8 flex justify-end gap-3">
  
            <button
              onClick={onClose}
              className="rounded-lg bg-slate-700 px-5 py-2 hover:bg-slate-600"
            >
              Cancel
            </button>
  
            <button
              className="rounded-lg bg-amber-500 px-5 py-2 font-semibold text-slate-900 hover:bg-amber-400"
            >
              Save Movie
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default MovieForm;