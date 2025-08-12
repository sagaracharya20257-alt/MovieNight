import Poster from "./Poster";
import Tag from "./Tag";

export default function MovieCard({ title, genre, posterUrl, rating }) {
  return (
    <div className="movie-card">
      <Poster src={posterUrl} alt={title} size="medium" />
      <div className="movie-details">
        <h2>{title}</h2>
        <Tag label={genre} color="teal" />
        <p>Rating: {rating}</p>
        {rating >= 8 && <Tag label="Recommended" color="green" />}
      </div>
    </div>
  );
}
