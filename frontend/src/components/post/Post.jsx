import React from 'react';
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = () => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img src='/assets/myPhoto.jpg' alt='' className='postProfileImg' />
            <span className='postUsername'>Dawa don</span>
            <span className='postDate'>5 Min ago</span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>It my first post</span>
          <img src='assets/school.jpg' alt='' className='postImage' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img src='assets/fblike.png' alt='' className='likeIcon' />
            <img src='assets/heart.png' alt='' className='likeIcon' />
            <span className='postLikeCounter'>32 people liked</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
