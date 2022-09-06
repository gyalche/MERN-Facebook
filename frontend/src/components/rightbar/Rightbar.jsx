import React from 'react';
import './rightbar.css';
const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img src='assets/gift.png' alt='' className='birthdayIma' />
          <span className='birthdayText'>
            <b>Wrishav</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightBarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img src='assets/mp.jpg' className='rightbarProfileImg' alt='' />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Dawa don</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
