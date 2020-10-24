import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import PropTypes from 'prop-types';
import User from '../User/User';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    setUsers(response.data);  
    console.log("Got something");
    })
  }, []);

  return (
    <div>
      <h3>User List</h3>
      <Link to="/">Home</Link>
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>{user.name}</li>
          )
        })}   
      </ul>
    </div>
  )
}

export default Users
