import React from 'react';
import { IUser } from '../../types/IUserInfo';
import './UserInfo.css';

const UserInfo: React.FC<IUser> = ({ data }): React.JSX.Element => {

  return (
    data ? (
      <div className='info-wrapper'>
        <img className='avatar' src={data.avatar_url} alt={data?.name} />
        <div className='info'>
          {data.name && <h2>Name: {data.name}</h2>}
          {data.bio && <h5 className='bio'>Bio: {data.bio}</h5>}
          <h4>Followers: {data.followers}</h4>
          <a className="link" href={data.html_url} target='_blank' rel='noreferrer'>Link to profile</a>
        </div>
      </div>
    ) : <></>
  );
};

export default UserInfo;