import React, {Component} from 'react';

const width = 100;
const height = 100;

class Video extends Component {
  state = {
    source: ""
  }

  componentDidMount(){
  	var video = document.getElementById('video');
  	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  		navigator.mediaDevices.getUserMedia({ video: {width: 100, height: 100}}).then(function(stream) {
	        //video.src = window.URL.createObjectURL(stream);
	        video.srcObject = stream;
	        video.play();
    	});
  	}

   //  const stream = navigator.mediaDevices.getUserMedia({
   //  'audio': false,
   //  'video': {
   //    width: 1000,
   //    height: 1000,
   //  },
  	// });
  	// var video = document.getElementById('video');
  	// video.

    console.log("okay")
  }

  videoError = (err) => {
    alert(err.name)
  }

  render() {
    return (
      <video id="video" width="200" height="200" autoPlay={true}>
      </video>
    );
  }
}

export default Video;