import moviesData from './movies.json'
import './App.css';
import MovieCard from './components/Moviecard';

function App() {
  const movies =moviesData;

  const getRandomMovies = (movies, count) => {
    const shuffled = movies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomMovies = getRandomMovies(movies, 4);

  return (
    <div className="App">
      <div className="movie-container">
        {randomMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
