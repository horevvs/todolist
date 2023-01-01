import React, { useRef, useEffect } from 'react';

import './App.css';






class Getcomponents extends React.Component {
  constructor () {
    super()
    this.state = {
      useElem: 0
    }
  }
  handleClick (elem) {
    var id = elem.target.id
    this.setState({ useElem: id })
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        {new Array(20).fill().map((_, index) =>
          <div
            key={index} // elem.id
            id={index} // elem.id
            useElem={index === this.state.useElem}
          />
        )}
      </div>
    )
  }
}




export default Getcomponents