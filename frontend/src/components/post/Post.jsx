import React from 'react';
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = ({ post }) => {
  console.log(post);
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img src='/assets/myPhoto.jpg' alt='' className='postProfileImg' />
            <span className='postUsername'>Dawa don</span>
            <span className='postDate'>{post?.date}</span>
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
            <img src='assets/fblike.png' alt='' className='likeIcon' />
            <img src='assets/heart.png' alt='' className='likeIcon' />
            <span className='postLikeCounter'>{post.like} people liked</span>
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
