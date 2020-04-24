import React from 'react';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  dispatch({
    type: 'TRIGGER_INITIAL_STATE',
  });
  return (
    <div>Home Component</div>
  );
};

export default Home;
