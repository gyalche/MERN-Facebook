import React, { useEffect, useState } from 'react';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './profile.css';
import axios from '../../axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const username = useParams().username;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img className='profileCoverImg' src={user.coverPicture} alt='' />
              <img
                className='profileUserImg'
                src={user.profilePicture}
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{user.username}</h4>
              <span className='profileInfoDesc'>{user.desc}</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
