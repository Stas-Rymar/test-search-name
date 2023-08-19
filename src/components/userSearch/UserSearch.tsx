import React, { useState } from 'react';
import { IUserSearch } from '../../types/IUserSearch';
import './UserSearch.css';
import Spinner from '../spinner/Spinner';

const UserSearch: React.FC<IUserSearch> = ({
                                             sendTrigger,
                                             isLoading,
                                             isFetching,
                                             isError
                                           }): React.JSX.Element => {

  const [userName, setUserName] = useState<string>('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendTrigger(userName);
    setUserName('');
  };

  return (
    <div className='form-wrapper'>
      <form className='form' onSubmit={onSubmitHandler}>
        <label className='input-label' htmlFor='name'>Please enter a username</label>
        <input className='input-name'
               type='text'
               name='name'
               value={userName}
               placeholder='Search username...'
               onChange={onChangeHandler}
        />
        <button type='submit' className='form-btn' disabled={!userName.length}>
          Search
        </button>
      </form>
      {(isLoading || isFetching) && <Spinner className='search-loader' />}

      {isError && <p className='error'>No such user was found, please try to enter another name...</p>}
    </div>
  );
};

export default UserSearch;