import React, { Component } from "react";
import './Post.css';
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

class Post extends Component {
       constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }

      openModal () {
       this.setState({isOpen: true})
       console.log("heyyyyy")
      }

      render() {
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;
        const click = this.props.click;

        return (
          <article className="Post" ref="Post">
            <header>
              <div className="Post-user">
                <div className="Post-user-avatar">
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                <img src={avatar} alt={nickname} />
                </div>
                <div className="Post-user-nickname">
                  <span>{nickname}</span>
                </div>
              </div>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img onClick={this.openModal} alt={caption} src={image} />
              </div>
            </div>
            <div className="Post-caption">
              <strong>{nickname}</strong>{caption}
            </div>
          </article>
        );
      }
    }

export default Post;