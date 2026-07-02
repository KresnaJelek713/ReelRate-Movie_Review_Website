function MovieCard({ title, genre, rating, image }) {
    return (
      <div className="overflow-hidden rounded-xl bg-slate-800 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover"
        />
  
        <div className="p-4">
          <h2 className="text-lg font-bold text-white">
            {title}
          </h2>
  
          <p className="mt-1 text-sm text-slate-400">
            {genre}
          </p>
  
          <p className="mt-3 text-amber-400 font-semibold">
            ⭐ {rating}
          </p>
        </div>
      </div>
    );
  }
  
  export default MovieCard;