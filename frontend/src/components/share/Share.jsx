import React, { useContext, useRef, useState } from 'react';
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AuthContext } from '../../context/AuthContext';
import axios from '../../axios';
const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('file', file);
      data.append('name', filename);
      newPost.img = filename;
      try {
        await axios.post('/upload', data);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post('/posts', newPost);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img
            src={user.profilePicture ? PF + user.profilePicture : ''}
            alt=''
            className='shareProfileImg'
          />
          <input
            type='text'
            className='shareInput'
            placeholder={'whats in your mind' + user.username + '?'}
            ref={desc}
          />
        </div>
        <hr className='shareHr' />
        <form className='shareBottom' onSubmit={submitHandler}>
          <div className='shareOptions'>
            <label htmlFor='file' className='shareOption'>
              <PermMediaIcon htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Phot or Video</span>
              <input
                style={{ display: 'none' }}
                type='file'
                id='file'
                accept='.png, .jpeg, .jpg'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

            <div className='shareOption'>
              <LabelIcon htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>

            <div className='shareOption'>
              <RoomIcon htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>

            <div className='shareOption'>
              <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton' type='submit'>
            share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
