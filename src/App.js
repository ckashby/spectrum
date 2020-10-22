import React from "react";
import "./App.css";
import axios from "axios";
import Posts from './components/Posts/Posts';
import firebase from '@firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {
  return (
    <>
    <h1>Main Menu</h1>
    <Posts />
    </>
  )
}

export default App;
