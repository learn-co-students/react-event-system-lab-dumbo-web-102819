import React, { Component } from 'react';

class Keypad extends Component {

  handleUp = (up) => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.handleUp} type="password" />
      </div>
    );
  }

}

export default Keypad;
