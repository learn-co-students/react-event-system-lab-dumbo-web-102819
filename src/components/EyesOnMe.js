import React, { Component } from 'react';

class EyesOnMe extends Component {

  handleBlur = (bl) => {
    console.log('Hey! Eyes on me!');
  }

  handleFocus = (foc) => {
    console.log('Good!');
  }

  render() {
    return (
      <div>
        <button onFocus={this.handleFocus} onBlur={this.handleBlur} />
      </div>
    );
  }

}

export default EyesOnMe;
