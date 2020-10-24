import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h3>Home Page</h3>
      <Link to="/posts">Posts</Link>
      <br />
      <Link to="/albums">Albums</Link>
      <br />
      <Link to="/users">Users</Link>
    </div>
  );
}
