import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Post from "./components/Post/Post";
import firebase from '@firebase/app'
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {
  const [posts, setPosts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Event: ", event);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      console.log("Got it!");
    })
  }, []);

  return (
    <div className="App">
      <h1>Hola</h1>
      <p>Lorem ipsum morende kavino ono marco.</p>
      <ul>
      {posts.map(post => {
        return (
          <>
          <Post id={post.id} title={post.title} /><p>{post.body}</p>
          {/* <li id={post.id}>{post.title}</li> */}
          </>
        )

      })}
      </ul>
    </div>
  );
}

export default App;
