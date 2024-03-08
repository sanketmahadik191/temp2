import styles from "./Moviecard.css";

const MovieCard = ({ movie }) => {
    const { name, duration, rating, genre, image } = movie;
  
    return (
      <div className="movie-card">
        <div className="movie-info">
          <h2 className="movie-name">{name}</h2>
          <p className="duration">{duration}</p>
          <p className="rating">Rating: {rating}</p>
          <p className="genre">Genre: {genre}</p>
        </div>
        <div className="movie-image">
          <img src={image} alt={name} />
        </div>
      </div>
    );
  }
  
  export default MovieCard;