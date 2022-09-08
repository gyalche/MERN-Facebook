import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './topbar.css';
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>DawaSocial</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <SearchIcon />
          <input
            placeholder='Search for friend, post or video'
            classname='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <PersonIcon />
            <span className='topbarIconBadge'>1</span>
          </div>

          <div className='topbarIconItem'>
            <ChatIcon />
            <span className='topbarIconBadge'>1</span>
          </div>

          <div className='topbarIconItem'>
            <NotificationsIcon />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <img src='/assets/myPhoto.jpg' alt='' className='topbarImg' />
      </div>
    </div>
  );
};

export default Topbar;
