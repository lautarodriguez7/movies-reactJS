import './App.css';
import Movies from './Movies';
import PageWrapper from './PageWrapper';
import MoviesJSON from './movies.json'
import Pagination from './Pagination';
import { useState } from 'react';

function App() {

  const [pageActual, setPageActual] = useState(1);
  const totalPage = 4;


  let allMovies = MoviesJSON;

  const loadMovies = () => {
    allMovies = allMovies.slice(
      (pageActual - 1) * totalPage,
      pageActual * totalPage
    );
  }

  const getTotalPage = () => {
    let amountMovies = MoviesJSON.length;
    return Math.ceil(amountMovies / totalPage); //redondear para arriba
  }

  loadMovies();

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

      <Pagination page={pageActual} total={getTotalPage()} onChange={(page) => {
        setPageActual(page)
      }} />
      </PageWrapper>
    </>
  );
}

export default App;
