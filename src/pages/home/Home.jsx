import React from 'react';
import { useDispatch } from 'react-redux';
import Page from '../../utils/pages/Page';

export const Home = () => {
  const dispatch = useDispatch();
  dispatch({
    type: 'TRIGGER_INITIAL_STATE',
  });
  return (
    <div>
      <div>Home Component</div>
    </div>
  );
};

export default Page(Home);
