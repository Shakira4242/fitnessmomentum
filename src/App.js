import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { Auth, Storage, API, graphqlOperation } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator, S3Album } from 'aws-amplify-react';
import Video from './video';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import {listUsers, listVideos, getUser, getVideo} from './graphql/queries';
import {createUser, updateUser, deleteUser, createVideo, deleteVideo} from './graphql/mutations';
import Header from './Header.js';
import Post from './Post.js';
import ReactDOM from 'react-dom';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Timeline from "./Timeline.js";
import Live from "./Live.js";

Amplify.configure(awsmobile);
Storage.configure({ level: 'private' });

var turn = 0;

function App(){
  const newUser = async () => {
    const input = {
      name: 'blah'
    };
    const newUserCreated = await API.graphql(graphqlOperation(createUser, {input}));
    alert(JSON.stringify(newUserCreated));
  }
  
  const listallUsers = async () => {
    console.log('listing users');
    const allUsers = await API.graphql(graphqlOperation(listUsers));
    alert(JSON.stringify(allUsers));
  }

  if(Auth.configure()){
    return( 
      <HashRouter>
      <div>
          <Header/>
          <section className="App-main">
            <Post nickname="Chris" avatar="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
            <Post nickname="OG" avatar="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
          </section>
      </div>
      </HashRouter>
    );
  }
}



export default withAuthenticator(App, true);