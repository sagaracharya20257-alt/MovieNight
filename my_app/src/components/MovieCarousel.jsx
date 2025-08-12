import MovieCard from "./MovieCard";

export default function MovieCarousel({ movies }) {
  return (
    <div
      id="movieCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {movies.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#movieCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {movies.map((movie, index) => (
          <div
            key={movie.title}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="d-flex justify-content-center">
              <MovieCard
                title={movie.title}
                genre={movie.genre}
                posterUrl={movie.posterUrl}
                rating={movie.rating}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#movieCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#movieCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
