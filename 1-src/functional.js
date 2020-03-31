//
//
import React from 'react';
import { connect } from 'react-redux';

import { getMoviesList } from './actions';

const Functional = ({ movies, getMoviesList }) => {
  console.log(movies);

  return (
    <>
      <div>
        <h1>Fun</h1>
      </div>
      <button onClick={() => getMoviesList()}>Get Movies</button>
    </>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = { getMoviesList };

export default connect(mapStateToProps, mapDispatchToProps)(Functional);
