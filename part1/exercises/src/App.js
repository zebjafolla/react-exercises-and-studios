import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList.js';
import ChoresList from './components/ChoresList.js';

function App() {
  return (
    <div className="App">
      <MovieList className="movie" />
      <ChoresList />
    </div>
  );
}

export default App;
