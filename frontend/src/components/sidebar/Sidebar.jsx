import React from 'react';
import './sidebar.css';
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <FeedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <ChatIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Chat</span>
          </li>

          <li className='sidebarListItem'>
            <FeaturedVideoIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Video</span>
          </li>

          <li className='sidebarListItem'>
            <GroupsIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>

          <li className='sidebarListItem'>
            <BookmarksIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>

          <li className='sidebarListItem'>
            <QuestionMarkIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Questions</span>
          </li>

          <li className='sidebarListItem'>
            <WorkIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Jobs</span>
          </li>

          <li className='sidebarListItem'>
            <EmojiEventsIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <SchoolIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='/assets/school.jpg' alt='' />
            <span className='sidebarFriendName'>Jand doe</span>
          </li>

          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='/assets/school.jpg' alt='' />
            <span className='sidebarFriendName'>Jand doe</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='/assets/school.jpg' alt='' />
            <span className='sidebarFriendName'>Jand doe</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='/assets/school.jpg' alt='' />
            <span className='sidebarFriendName'>Jand doe</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='/assets/school.jpg' alt='' />
            <span className='sidebarFriendName'>Jand doe</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='/assets/school.jpg' alt='' />
            <span className='sidebarFriendName'>Jand doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
