import React from 'react';
import UserSearch from '../userSearch/UserSearch';
import { useLazyGetUserQuery } from '../../api/userApi';
import UserInfo from '../userInfo/UserInfo';
import './App.css';

function App(): React.JSX.Element {

  const [sendTrigger, {
    data,
    error,
    isLoading,
    isFetching,
    isError
  }] = useLazyGetUserQuery();

  console.log(error);
  return (
    <div className='main'>
      <div className='container'>
        <h1>Test assignment</h1>
        <UserSearch sendTrigger={sendTrigger}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    isError={isError}
        />
        <UserInfo data={data} />
      </div>
    </div>
  );
}

export default App;
