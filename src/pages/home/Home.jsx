import React from 'react';
import { useDispatch } from 'react-redux';
import HeaderBar from '../../components/Molecules/header-bar/HeaderBar'

export const Home = () => {
  const dispatch = useDispatch();
  dispatch({
    type: 'TRIGGER_INITIAL_STATE',
  });
  return (
    <div>
      <HeaderBar isLoggedIn={false} />
      <div>Home Component</div>
    </div>
  );
};

export default Home;
