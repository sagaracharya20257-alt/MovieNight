import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieCard from "./components/MovieCard";
import GuestList from "./components/GuestList";
import Counter from "./components/Counter";
import PlanForm from "./components/PlanForm";
import MovieCarousel from "./components/MovieCarousel";

export default function App() {
  const [plan, setPlan] = useState({
    title: "",
    date: "",
    location: "",
  });

  const handlePlanChange = (field, value) => {
    setPlan((prev) => ({ ...prev, [field]: value }));
  };

  const movies = [
    {
      title: "Inception",
      genre: "Sci-Fi",
      posterUrl: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg",
      rating: 8.8,
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      rating: 8.6,
    },
    {
      title: "The Dark Knight",
      genre: "Action",
      posterUrl: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg",
      rating: 9.0,
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      posterUrl: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
      rating: 9.3,
    },
    {
      title: "The Godfather",
      genre: "Crime",
      posterUrl: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg",
      rating: 9.2,
    },
    {
      title: "The Matrix",
      genre: "Sci-Fi",
      posterUrl: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg",
      rating: 8.7,
    },
    {
      title: "Parasite",
      genre: "Thriller",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
      rating: 8.6,
    },
    {
      title: "Avengers: Endgame",
      genre: "Superhero",
      posterUrl: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
      rating: 8.4,
    },
    {
      title: "Joker",
      genre: "Drama",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
      rating: 8.4,
    },
    {
      title: "Spider-Man: No Way Home",
      genre: "Superhero",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
      rating: 8.3,
    },
    {
      title: "Guardians of the Galaxy",
      genre: "Superhero",
      posterUrl: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      rating: 8.0,
    },
    {
      title: "Toy Story",
      genre: "Animation",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
      rating: 8.3,
    },
    {
      title: "The Lion King",
      genre: "Animation",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
      rating: 8.5,
    },
    {
      title: "Titanic",
      genre: "Romance",
      posterUrl: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      rating: 7.9,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      posterUrl: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      rating: 7.6,
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      genre: "Fantasy",
      posterUrl: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      rating: 8.8,
    },
  ];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🎬 Movie Night Planner</h1>

      {/* Movie Carousel */}
      <MovieCarousel movies={movies} />

      <hr />

      {/* Movies Grid
      <div className="row g-4">
        {movies.map((movie, idx) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={idx}>
            <MovieCard
              title={movie.title}
              genre={movie.genre}
              posterUrl={movie.posterUrl}
              rating={movie.rating}
            />
          </div>
        ))}
      </div> */}

      <hr />

      <GuestList />

      <hr />

      <Counter />

      <hr />

      <PlanForm plan={plan} onPlanChange={handlePlanChange} />

      <div className="mt-4 p-3 border rounded bg-light">
        <h2>📅 Live Preview</h2>
        <p>
          <strong>Movie:</strong> {plan.title || "Not set"}
        </p>
        <p>
          <strong>Date:</strong> {plan.date || "Not set"}
        </p>
        <p>
          <strong>Location:</strong> {plan.location || "Not set"}
        </p>
      </div>
    </div>
  );
}
