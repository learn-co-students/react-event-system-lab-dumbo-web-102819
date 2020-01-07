import React from 'react';
export default class EyesOnMe extends React.Component {
    render() {
        return <button onBlur={() => {console.log('Hey! Eyes on me!')}} onFocus={() => {
          console.log('Good!')  
        }}></button>
    }
}