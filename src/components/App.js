import React from "react";
import logo from "../logo.svg";
import "../styles/App.css";
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path = "/login" component = {Login} />
        </Switch>
      </div>
      {/* 
      <LinkList />
      <CreateLink /> */}
    </div>
  );
}

export default App;
