import React, { useEffect, useState, useContext } from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import Home from '../../pages/home/Home';
import axios from '../../axios';
import { Link } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
const Rightbar = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(false);
  const { user: currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user._id]);
  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user._id]);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/users/' + user._id + '/follow', {
        userId: currentUser._id,
      });
    } catch (error) {
      await axios.put('/users/' + user._id + '/unfollow', {
        userId: currentUser._id,
      });
    }
    setFollowed(!followed);
  };
  const HomeRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className='rightbarFollowButton' onClick={handleClick}>
            {followed ? 'unfollow' : 'follow'}
            {followed ? '-' : '+'}
          </button>
        )}
        <div className='birthdayContainer'>
          <img src='assets/gift.png' alt='' className='birthdayIma' />
          <span className='birthdayText'>
            <b>Wrishav</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{user.city}</span>
          </div>

          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>{user.from}</span>
          </div>

          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : ''}
            </span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          {friends.map((friend) => (
            <Link to={'/profile/' + friend.username}>
              <div className='rightbarFollowing'>
                <img
                  src={friend.profilePicture}
                  alt=''
                  className='rightbarFollowingImg'
                />
                <span className='rightbarFollowingName'>{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
