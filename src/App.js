import logo from './logo.svg';
import './App.css';
import MovieCard from './components/Moviecard';

function App() {
  const movies = [
    {
      id: 1,
      name: 'Avenger',
      duration: '165 min',
      rating: '8.5',
      genre: 'Action',
      image: 'https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_640.jpg', // Placeholder image URL
    },
    {
      id: 2,
      name: 'Spider Man',
      duration: '150 min',
      rating: '8.0',
      genre: 'Comedy',
      image: 'https://cdn.pixabay.com/photo/2022/05/15/04/36/art-7196739_640.jpg', // Placeholder image URL
    },
    {
      id: 3,
      name: 'Captain America',
      duration: '100 min',
      rating: '7.8',
      genre: 'Drama',
      image: 'https://cdn.pixabay.com/photo/2021/11/12/14/33/captain-america-6789190_640.jpg', // Placeholder image URL
    },
    {
      id: 4,
      name: 'Deadpool',
      duration: '130 min',
      rating: '6.9',
      genre: 'Horror',
      image: 'https://cdn.pixabay.com/photo/2020/11/28/03/20/deadpool-5783526_640.png', // Placeholder image URL
    },
  ];

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
