import React, { useState, useEffect } from 'react';
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from '../../axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={`profile/${user.username}`}>
              <img
                src={user.profilePicture}
                alt=''
                className='postProfileImg'
              />
            </Link>
            <span className='postUsername'>{user.username}</span>
            <span className='postDate'>{format(post.createdAt)}</span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img src={post.photo} alt='' className='postImage' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              src='assets/fblike.png'
              alt=''
              className='likeIcon'
              onClick={likeHandler}
            />
            <img
              src='assets/heart.png'
              alt=''
              className='likeIcon'
              onClick={likeHandler}
            />
            <span className='postLikeCounter'>{like} people liked</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
