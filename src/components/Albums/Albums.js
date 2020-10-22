import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Album from '../Album/Album';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((response) => {
      setAlbums(response.data);
      console.log("Got it!");
    })
  }, []);

  return (
    <>
     <h2>Album list</h2>
     <Link to="/">Home</Link>
     <ul>
       {albums.map(album => {
         return (
           <>
           <Album title={album.title} id={album.id} />
           </>
         )
       })}

     </ul>
    </>
  )
}

export default Albums;