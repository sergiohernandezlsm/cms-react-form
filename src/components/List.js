import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersThunk, getUserThunk } from '../thunks/users';

function App() {
  const dispatch = useDispatch();
  const dataRedux = useSelector(state => state.users.users);

  console.log(useSelector(state => state.users));

  useEffect(() => {
    dispatch(getUsersThunk());
    dispatch(getUserThunk(4));
  }, [dispatch]);

  return (
    <Fragment>
      <ul>
        {dataRedux.map(user => (
          <li key={user.id}>
            {user.firstName}{' '}{user.lastName}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;