import React, {Component} from 'react';
import {start} from './process.js'; 
import Header from './Header.js';
// var Peer = require('simple-peer')



// function gotMedia(stream) {

  // var peer1 = new Peer({ initiator: true, stream: stream })
  // var peer2 = new Peer()

  // peer1.on('signal', data => {
  //   peer2.signal(data)
  // })

  // peer2.on('signal', data => {
  //   peer1.signal(data)
  // })

  // peer2.on('stream', stream => {
  //   // got remote video stream, now let's show it in a video tag
  //   var video = document.querySelector('video')
    
  //   if ('srcObject' in video) {
  //     video.srcObject = stream
  //   } else {
  //     video.src = window.URL.createObjectURL(stream) // for older browsers
  //   }
    
  //   video.play()
  // })
// }


const width = 100;
const height = 100;

class Video extends Component {
  state = {
    source: ""
  }

  componentDidMount(){
  	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      var video = document.getElementById('video');
    	navigator.mediaDevices.getUserMedia({ video: {width: 100, height: 100}}).then(function(stream) {
	     //video.src = window.URL.createObjectURL(stream);
		    video.srcObject = stream;
	      video.play();
        start();
    	});
  	}
  }

  videoError = (err) => {
    alert(err.name)
  }

  render() {
    return (
      <div>
      <Header/>
    	<div>
		    <div id='main'>
          <video id="video" playsInline style={{
          transform: "scaleX(-1)",
          display: "none"}}>
          </video>
  		    <canvas id="output" />
    		</div>
    		<div id='threeContainer'>
    		</div>
  		</div>
      </div>
    );
  }
}

export default Video;