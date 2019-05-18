import React, {Component} from 'react';

class Video extends Component {

  state = {
    source: ""
  }

  componentDidMount(){
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
      .then(this.handleVideo)
      .catch(this.videoError)
  }

  handleVideo = (stream) => {
    this.setState({
      source: window.URL.createObjectURL(stream)
    })
  }

  videoError = (err) => {
    alert(err.name)
  }



  render() {
    return (
      <video id="video-chat" src={this.state.source} autoPlay="true">
      </video>
    )
  }
}

export default Video;