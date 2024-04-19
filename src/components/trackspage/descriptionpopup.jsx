import React, { Component } from 'react';

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>Close Me</button>
        </div>
      </div>
    );
  }
}

class Display extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup = () => {
    this.setState(prevState => ({
      showPopup: !prevState.showPopup
    }));
  };

  render() {
    return (
      <div className='Display'>
        <button onClick={this.togglePopup}>Show Popup</button>
        <button onClick={() => {alert('woooooooot?');}}>Try me when popup is open</button>
        {this.state.showPopup && 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup}
          />
        }
      </div>
    );
  }
}

export default Display;
