//
//
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getMoviesList } from './actions';

const Hooks = () => {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);

  console.log(movies);

  return (
    <>
      <div>
        <h1>Hooks</h1>
        {/* <button onClick={() => dispatch(getMoviesList())}>Get Movies</button> */}
      </div>
    </>
  );
};

export default Hooks;
