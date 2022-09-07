import React from 'react';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './profile.css';

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img className='profileCoverImg' src='assets/school.jpg' alt='' />
              <img className='profileUserImg' src='assets/myPhoto.jpg' alt='' />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Dawa don</h4>
              <span className='profileInfoDesc'>
                my info will be available soon
              </span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
