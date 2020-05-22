import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./SearchMovies";
import "./styles.css";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));