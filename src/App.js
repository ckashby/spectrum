import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from '@firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

import "./App.css";
import HomePage from './components/pages/HomePage';
import Posts from './components/Posts/Posts';
import Albums from './components/Albums/Albums';

function App() {
  return (
    <>
    <BrowserRouter>
    <Route path="/" exact component={HomePage} />
    <Route path="/posts" exact component={Posts} />
    <Route path="/albums" exact component={Albums} />
    </BrowserRouter>
    </>
  )
}

export default App;
