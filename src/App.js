import './App.css';
import Movies from './Movies';
import PageWrapper from './PageWrapper';
import MoviesJSON from './movies.json'

function App() {

  let allMovies = MoviesJSON;

  return (
    <>
      <PageWrapper>
        {allMovies.map(movie =>
          <Movies
          image={movie.image}
          title={movie.title}
          score={movie.score}
          time={movie.time}
          release={movie.release}
          director={movie.director}
          actors={movie.actors}>
          {movie.description}
        </Movies>
        )}
      </PageWrapper>
    </>
  );
}

export default App;
