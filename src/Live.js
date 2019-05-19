import React, { Component } from "react";
import Header from './Header.js';
import Video from './video.js';

 
class Live extends Component {
  render() {
    return (
      <div>
        <Video/>
        <div id="threeContainer">
        </div>
      </div>
    );
  }
}
 
export default Live;