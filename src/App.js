import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { Storage } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator, S3Album } from 'aws-amplify-react';

Amplify.configure(awsmobile);
Storage.configure({ level: 'private' });

function App() {
  console.log()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Video(){
  return (
    <div className='Video'>
        <video id="video" playsinline style=" -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        display: none;
        ">
        </video>
        <canvas id="output" />
    </div>
  );
}

export default withAuthenticator(App, true);