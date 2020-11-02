import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import firebase from "@firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
// import MenuPage from "./components/pages/MenuPage";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Albums from "./components/Albums/Albums";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Switch> */}
        <Header />
        <Route path="/posts" exact component={Posts} />
        <Route path="/albums" exact component={Albums} />
        <Route path="/users" exact component={Users} />
        {/* </Switch> */}
      </BrowserRouter>
    </>
  );
}

export default App;
