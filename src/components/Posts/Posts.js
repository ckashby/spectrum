import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from '../Post/Post';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      console.log("Got it!");
    })
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <Link to="/">Home</Link>
      <ul>
      {posts.map(post => {
        return (
          <>
          <Post id={post.id} title={post.title} /><p>{post.body}</p>
          </>
        )
      })}
      </ul>
    </>
  )
}

export default Posts;


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Event: ", event);
  // };