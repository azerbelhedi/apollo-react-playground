import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink';

function App() {
  return (
    <div className="App">
     <LinkList/>
     <CreateLink/>
    </div>
  );
}

export default App;
