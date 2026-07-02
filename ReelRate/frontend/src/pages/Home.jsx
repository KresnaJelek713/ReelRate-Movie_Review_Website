import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    {
      title: "The Batman",
      genre: "Action",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
    },
    {
      title: "Inception",
      genre: "Sci-Fi",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500",
    },
    {
      title: "Interstellar",
      genre: "Adventure",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-8 py-12">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-white">
          Discover Amazing Movies
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
          Track your favorite movies, share your reviews,
          and discover great films with ReelRate.
        </p>

        <button className="mt-8 rounded-lg bg-amber-500 px-8 py-3 font-semibold text-slate-900 transition hover:bg-amber-400">
          Explore Movies
        </button>
      </section>

      {/* Trending */}
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-white">
          🔥 Trending Movies
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
              image={movie.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;