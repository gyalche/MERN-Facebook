import React, { useState, useEffect } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import { Posts } from '../../dummyData';
import axios from '../../axios';
import { useParams } from 'react-router-dom';
const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get('/posts/profile/' + username)
        : await axios.get(`/posts/timeline/:${params}`);
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
