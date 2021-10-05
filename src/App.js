import './App.css';
import Movies from './Movies';
import PageWrapper from './PageWrapper';
import MoviesJSON from './movies.json'
import Pagination from "./Pagination";

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
                <Pagination page={2} total={4} 
                onChange={(page) => {alert(page)}}/>

      </PageWrapper>
    </>
  );
}

export default App;
