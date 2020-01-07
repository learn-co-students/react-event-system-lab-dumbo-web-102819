// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {
    render () {
        return (
            <button onFocus={this.handleMouseIn} onBlur={this.handleMouseOut}/>
        )
    }
    handleMouseOut = () => {
        console.log('Hey! Eyes on me!')
    }
    handleMouseIn = () => {
        console.log('Good!')
    }
}